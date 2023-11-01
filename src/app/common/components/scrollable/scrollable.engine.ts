// import ResizeObserver from "resize-observer";

export enum EScrollableOrientation {
    Horizontal = 'horizontal',
    Vertical = 'vertical',
};

enum EScrollableDimension {
    OffsetHeight = 'offsetHeight',
    OffsetWidth = 'offsetWidth',
};

enum EScrollableOperated {
    Top = 'top',
    Left = 'left',
};

enum ESCrollableAxis {
    X = 'X',
    Y = 'Y',
};

function sign(x){
	return x > 0 ? 1: x < 0 ? -1 : 0;
}

const toggleClass = (element, className, value) => {
	const hasClass = element.classList.contains(className);
	if (value && !hasClass) element.classList.add(className);
	else if (!value && hasClass) element.classList.remove(className);
}


const frictionFactor = (offset?: number, flightOut: number = 0) => {
	if(offset !== undefined){
		offset = Math.abs(offset);
		return offset < 35 ? -0.25 :
				offset < 55 ? -0.27 :
				offset < 100 ? -0.32 :
				offset < flightOut ? -0.7 : -0.9;
	}
	return -0.05;
};

const elasticFactor = (offset, snorm, flightOut) => {
	var anorm = sign(offset * snorm);
	offset = Math.abs(offset);
	if(anorm < 0){
		return offset < 55 ? -0.02 :
			offset < 70 ? -0.02 :
			offset < 85 ? -0.03 :
			offset < 90 ? -0.05 :
			offset < flightOut ? -0.06 : -0.1
		;
	} else {
		return offset < 35 ? -0.02 :
			offset < 40 ? -0.03 :
			offset < 65 ? -0.05 :
			offset < 70 ? -0.09 :
			offset < flightOut ? -0.13 : -0.2
		;
	}
};

export class ScrollableEngine {
    private slider: HTMLElement;
    private marker: HTMLElement;
    private edgeStart: HTMLElement;
    private edgeEnd: HTMLElement;
    private scrollMarkerDock: HTMLElement;

    private nonmovable: boolean = false;
    // private maxHeight: number;
    private speed: number = 0;
    private dragSpeed: { delta: number, time: number }[] = [];
    private friction: number = 0;
    private flightOut: number = 150;
    private outside: boolean = false;
    private _inMove: boolean = false;
    private sliderDimension: number = 0;
    private resizeObserver: ResizeObserver;
    private mutationObserver: MutationObserver;
    private markerDrag: boolean = false;
    private endpoint: number = 0;

    private containerDimension: number = 0; // container dimension
    private mdim: number = 0; // marker dimension

    private sliderTime: number;
    protected sliderPos: number = 0;
    protected sliderPosition: number = 0; // init slider position
    protected topPos: number = 0;
    protected mover: NodeJS.Timeout;

    private markerAnchor: number = 0;
    //this.markerPos = 0;
    private passedEdge: boolean = false;

    /* event handlers */
    private _onReachEnd: ((...args: any[]) => void)[] = [];


    private get dimension(): EScrollableDimension {
        return this.orientation === EScrollableOrientation.Vertical && EScrollableDimension.OffsetHeight || EScrollableDimension.OffsetWidth;
    }


    public get axis(): ESCrollableAxis {
        return this.orientation === EScrollableOrientation.Vertical && ESCrollableAxis.Y || ESCrollableAxis.X;
    }

    public get operated(): EScrollableOperated {
        return this.orientation === EScrollableOrientation.Vertical && EScrollableOperated.Top || EScrollableOperated.Left;
    }

    private get cssDimension(): 'width' | 'height' {
		return this.dimension === EScrollableDimension.OffsetWidth ? 'width' : 'height';
	}

	private get inMove() {
		return this._inMove;
	}

	private set inMove(value: boolean) {
		this._inMove = value;
	}

	constructor(
        private container: HTMLElement ,
        private orientation: EScrollableOrientation = EScrollableOrientation.Vertical
    ) {
		this.slider = this.container.querySelector(".slider");
		this.marker = this.container.querySelector(".scroll-marker");
		this.edgeStart = this.container.querySelector(".shadow-edge.start");
		this.edgeEnd = this.container.querySelector(".shadow-edge.end");
		this.scrollMarkerDock = this.container.querySelector(".scroll-marker-dock");

		// this.maxHeight = parseInt(this.container.style.maxHeight);
		this.init();
	}

	// private halt = evt => evt.preventDefault();

	destroy() {
		// remove all listeners from items
	}

	dragMarkerHandler = (evt) => this.dragMarker(evt);
	dragSliderHandler = (evt) => this.dragSlider(evt);
	stopDragMarkerHandler = (evt) => this.stopDragMarker(evt);
	stopDragSliderHandler = (evt) => this.stopDragSliderFinal(evt);

	init() {
		this.marker.addEventListener('mousedown', (evt) => this.startDragMarker(evt));
		this.slider.addEventListener('touchstart', (evt) => this.startDragSlider(evt), false);
		this.container.addEventListener('wheel', (evt) => this.wheelMouse(evt));

		this.resizeObserver = new ResizeObserver(() => {
			this.initDimensions();
		});

        this.mutationObserver = new MutationObserver(() => {
			this.initDimensions();
		})

        this.resizeObserver.observe(this.slider);
		this.mutationObserver.observe(this.slider, {
			childList: true,
			subtree: true
		});
	}

	initDimensions() {
		let ht = this.slider[this.dimension];
		this.sliderDimension = ht;
		this.containerDimension = this.container[this.dimension];

		this.topPos = this.containerDimension < this.sliderDimension ? this.containerDimension - this.sliderDimension : 0;
		this.nonmovable = this.containerDimension >= this.sliderDimension;

		if(this.nonmovable || this.sliderPosition > 0){
			this.sliderPosition = 0;
			this.speed = 0;
			this.setPosition(0, true);
		}

		this.mdim = Math.round(this.containerDimension / this.sliderDimension * this.containerDimension);

		if(this.mdim < 40) this.mdim = 40;

		const mloc = {};
		mloc[this.cssDimension] = this.mdim + 'px';
		Object.assign(this.marker.style, mloc);
		this.updateElementStates();


		// check if slider bottom on the view shoud fire onReachEnd event
		if (this.sliderPosition + ht <= this.containerDimension) {
			this.fire('onReachEnd', { side: 'bottom' });
		}
	}

	actSliderPosition() {
		Object.assign(this.slider.style, {
			transform: `translate${this.axis}(${Math.round(this.sliderPosition)}px)`
		});
	}

	actMarkerPosition() {
		Object.assign(this.marker.style, {
			[this.operated]: this.markerPos + 'px'
		});
	}

	protected updateElementStates() {
		const pos = Math.round(this.sliderPosition);
		toggleClass(this.scrollMarkerDock, 'showed', this.inMove || this.markerDrag);
		toggleClass(this.scrollMarkerDock, 'hidden', this.nonmovable);
		toggleClass(this.marker, 'active', this.inMove || this.markerDrag);
		toggleClass(this.edgeStart, 'active', pos < 0);
		toggleClass(this.edgeEnd, 'active', pos > this.topPos);

		this.actMarkerPosition();
		this.actSliderPosition();

	}

	protected wheelMouse(evt) {
        console.log('mouse wheel', evt);
		var evt = evt && evt.originalEvent || evt;
		if(this.nonmovable) return;
		evt.preventDefault();
		this.addSpeed(evt['wheelDelta' + this.axis] * 2, 1000);
	}

	protected startDragSlider(evt) {
		evt.preventDefault();
		evt = evt.originalEvent || evt;
		this.slider.addEventListener('touchend', this.stopDragSliderHandler, false);
		this.slider.addEventListener('touchmove', this.dragSliderHandler, false);
		this.inMove = false;
		this.dragSpeed = [];
		this.sliderPos = evt.touches[0]['page' + this.axis];
		this.sliderTime = new Date().getTime();
	}

	protected dragSlider(evt) {
		evt.preventDefault();
		evt = evt.originalEvent || evt;

		const npos = evt.touches[0]['page' + this.axis];
		const delta = npos - this.sliderPos;
		const dt = new Date().getTime();

		this.sliderPos = npos;
		this.dragSpeed.unshift({ delta: delta, time: dt - this.sliderTime });
		this.sliderTime = dt;

		this.setPosition(this.sliderPosition + delta, true);
	}

	stopDragSlider(evt){
		this.inMove = false;
		evt = evt.originalEvent || evt;
		const lastDelta = this.endpoint;
		const speed = this.dragSpeed
            .slice(0, 5)
            .reduce((res, value) => ({
                delta: res.delta + value.delta,
                time: res.time + value.time,
            }), { delta: 0, time: 0 });
		const rspeed = speed.delta / speed.time * 250;
		Math.abs(rspeed) > 50 && this.addSpeed(rspeed, 13000);

		// clearInterval(this.speedDowner);
	}

	startDragMarker(evt){
		evt.preventDefault();
		this.markerDrag = true;
		document.addEventListener('mousemove', this.dragMarkerHandler);
		document.addEventListener('mouseup', this.stopDragMarkerHandler);
		this.markerAnchor = evt['page' + this.axis];
	}

	stopDragSliderFinal(evt) {
		this.stopDragSlider(evt);
		this.slider.removeEventListener('touchend', this.stopDragSliderHandler);
		this.slider.removeEventListener('touchmove', this.dragSliderHandler);

		if (!this.inMove) {
			const opts = {
				'view': window,
				'bubbles': true,
				'cancelable': true
			};
			const click = new MouseEvent('click', opts);
			const enter = new MouseEvent('mouseover', opts);
			evt.target.dispatchEvent(enter);
			evt.target.dispatchEvent(click);
		}
	}

	protected dragMarker(evt){
		evt.preventDefault();
		var delta = evt[`page${this.axis}`] - this.markerAnchor;
		this.markerAnchor = evt[`page${this.axis}`];

		if(this.markerPos + delta < 0) delta = -this.markerPos;
		if(this.markerPos + delta + this.mdim > this.containerDimension) delta = this.containerDimension - this.mdim - this.markerPos;

		const markerPos = this.markerPos + delta;

		const cpos = -markerPos * this.containerDimension / this.mdim;
		this.setPosition(cpos);
	}

	stopDragMarker(evt){
		evt.preventDefault();
		evt.stopPropagation();
		document.removeEventListener('mousemove', this.dragMarkerHandler);
		document.removeEventListener('mouseup', this.stopDragMarkerHandler);
		this.markerDrag = false;
	}

	startMove(){
		if(!this.mover) this.mover = setInterval(() => this.moveSlider(), 10);
	}

	stopMove(){
		clearInterval(this.mover);
		this.speed = 0;
		this.friction = 0;
		this.mover = null;
	}

	on(eventName, cb) {
		switch( eventName ) {
			case 'onReachEnd':
				this._onReachEnd.push(cb);
			break;
		}
	}

	off(eventName, cb) {
		switch( eventName ) {
			case 'onReachEnd':
			this._onReachEnd = this._onReachEnd.filter(_cb => _cb !== cb);
			break;
		}
	}

	fire(eventName, params) {
		switch( eventName ) {
			case 'onReachEnd':
			this._onReachEnd.forEach(cb => cb(params));
			break;
		}
	}

	moveSlider(){
		let offset;
		let elastic = 0;

		this.outside = this.sliderPosition > 0 || this.sliderPosition < this.topPos;
		if(this.outside){
			if(!this.passedEdge){
				this.passedEdge = true;
				this.fire('onReachEnd', { side: this.sliderPosition > 0 ? 'top' : 'bottom' });
			}
			offset = this.sliderPosition > 0 ? this.sliderPosition + this.speed: this.sliderPosition - this.topPos + this.speed;
			if(this.sliderPosition > 0 && offset >= this.flightOut || this.sliderPosition < this.topPos && offset <= -this.flightOut){
				this.sliderPosition = this.sliderPosition > 0 ? this.flightOut : this.topPos - this.flightOut;
				offset = this.sliderPosition > 0 ? this.flightOut : -this.flightOut;
				this.speed = this.sliderPosition > 0 ? -0.0001 : 0.0001;
			}
			elastic = offset * elasticFactor(offset, sign(this.speed), this.flightOut);
		} else {
			if(this.passedEdge) this.passedEdge = false;
		}

		if(isNaN(this.speed) || (!this.outside && Math.round(this.speed / 2) === 0)){
			this.stopMove();
			return;
		}

		this.sliderPosition += this.speed;
		this.speed = this.speed + this.friction + elastic;
		this.speed = Math.round(this.speed * 100) / 100;
		this.friction = this.speed * frictionFactor(offset, this.flightOut);
		this.updateElementStates();
	}

	get markerPos() {
		return (this.sliderPosition / this.topPos) * (this.containerDimension - this.mdim);
	}

	addSpeed(svector, time){
		if(this.nonmovable) return;

		time = time || 3000;
		var cfriction = time / 100;
		if(!this.outside && this.speed * svector < 0) this.speed = this.speed / 5;
		else
			this.speed += 2 * svector / 29;

		this.friction = this.speed * frictionFactor();
		this.startMove();
	}

	setPosition(pos, force: boolean = false){
		if(!force && this.nonmovable) return;

		this.sliderPosition = pos;
		this.outside = false;
		this.passedEdge = false;
		this.speed = 0;

		this.updateElementStates();
	}
}

const frequency = 10;

export class ScrollableEngine2 extends ScrollableEngine {
	private sliderDestination = 0;
	private _speedFactor = 150; //more speed factor makes speed fade slowly
	private state = null;

	protected override wheelMouse(evt: MouseEvent) {
		this.speedFactor = 150;
		evt.preventDefault();
		const delta = -evt[`delta${this.axis}`] * 2;
		this.run(delta);
	}

	private isOnEdge(vector: number) {
		if (vector > 0 && this.sliderPosition === 0) return true;
		if (vector < 0 && this.sliderPosition === this.topPos) return true;
		return false;
	}

	private isOffside(vector) {
		if (this.state === 'backward') {
			if (this.sliderPosition > 0 && vector > 0) return true;
			if (this.sliderPosition < this.topPos && vector < 0) return true;
		}
		return false;
	}

	protected override dragMarker(evt) {
		super.dragMarker(evt);
		this.sliderDestination = this.sliderPosition;
	}

	/* slider events */

	protected override dragSlider(evt: TouchEvent) {
		evt.preventDefault();
		this.speedFactor = 20;

		const npos = evt.touches[0][`page${this.axis}`];
		const delta = npos - this.sliderPos;
		this.sliderPos = npos;
		this.run(delta);
	}

	run(delta) {
		if (!this.isOnEdge(delta) && !this.isOffside(delta)) {
			const setPosition = this.sliderDestination + delta;
			this.sliderDestination = setPosition;
			this.state = 'normal';
			this.moveSlider();
		}
	}

	_round(value) {
		return Math.round(value * 50) / 50;
	}

	_moveSliderQuant() {
		this.sliderPosition = this.nextPosition;
		this.updateElementStates();
	}

	stopDragSlider(evt) {
		const cspeed = this.currentSpeed;
		if (cspeed === 0) return;
		const delta = this.sliderDestination - this.sliderPosition;
		this.speedFactor = 250;
		const newDelta = delta * cspeed / this.currentSpeed * 3;
		this.sliderDestination = newDelta + this.sliderPosition;
	}


	/* Movement processing */

	get nextPosition() {
		return this._round(this.sliderPosition + this.currentSpeed);
	}

	get distance() {
		return this.sliderDestination - this.sliderPosition;
	}

	get speedFactor() {
		return this._speedFactor;
	}

	set speedFactor(value) {
		this._speedFactor = value;
	}

	get currentSpeed() {
		const sf = this.speedFactor;
		let speed = this.distance / sf * frequency;
		return this._round(speed);
	}

	stopSlider() {
		this.sliderPosition = Math.round(this.sliderPosition);
		this.sliderDestination = this.sliderPosition;
		this.state = null;
		this.mover && clearInterval(this.mover);
		this.mover = null;
		this.updateElementStates();
	}

	onReachEnd() {
		const isReach = this.isReach;
		if (isReach) this.fire('onReachEnd', { side: isReach });
	}

	get isReach() {
		if (this.state === 'backward') return null;
		if (this.sliderPosition >= 0) return 'top';
		if (this.sliderPosition <= this.topPos) return 'bottom';
		return null;
	}

	checkState() {
		this.onReachEnd();
		const speed = this.currentSpeed;
		switch(this.state) {
			case 'normal':
				if (speed > 0) {
					if (this.sliderPosition > 0) {
						this.state = 'backward';
						this.sliderDestination = 0;
					}
				} else if (speed < 0) {
					if (this.sliderPosition < this.topPos) {
						this.state = 'backward';
						this.sliderDestination = this.topPos;
					}
				}
			break;
			case 'backward':
				if (speed === 0) {
					this.stopSlider();
				}
			break;
		}
	}

	moveSlider() {
		if (this.mover) return;
		// const speed = this.currentSpeed;
		this.state = 'normal';

		this.mover = setInterval(() => {
			this._moveSliderQuant();
			this.checkState();
		}, frequency);

		this._moveSliderQuant()
	}


}
