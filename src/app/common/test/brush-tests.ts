import {
	I2DCoordinates,
	IRGBA,
	hardness,
	BrushManager,
	StandardBrush,
	PictureEditor,
} from 'picture-editor';
import { IPenPointer, IPointerBase } from 'picture-editor/build/tools/brush-tool/models/brush.model';
import { testPoints1, testPoints3, testPoints5 } from "./points";

class TestBrushManager extends BrushManager {
	public getSpot(point: IPenPointer, destination: ImageData) {
		return super.getCurrentBrush().setSpot(point);
	}

	/*public drawTo(dest: ImageData, source: ImageData, pos: I2DCoordinates, smooth = false) {
		return super.drawTo(dest, source, pos, smooth);
	}*/
}

export const brushManager = new TestBrushManager();
/*
brush.setBrush(new StandardBrush());
brush.setBrush(new TestBrush());
*/

function putPoint(p: { x: number, y: number }, color: IRGBA, out: ImageData) {
	const c = p.y * out.width + p.x;
	out.data[c * 4] = color.r;
	out.data[c * 4 + 1] = color.g;
	out.data[c * 4 + 2] = color.b;
	out.data[c * 4 + 3] = color.a * 255;
}

function drawLine(x0: number, y0: number, x1: number, y1: number, color: IRGBA, out: ImageData) {
	let pi: 'x' | 'y' = 'x';
	let ai: 'x' | 'y' = 'y';
	let p0 = x0;
	let p1 = x1;
	let a0 = y0;
	let a1 = y1;
	let k = 0;
	let revert = false;
	if (x1 !== x0) {
		k = (y1 - y0) / (x1 - x0);
		if (k > 1) { k = 1 / k; revert = true;}
	} else revert = true;

	if (revert) {
		p0 = y0;
		p1 = y1;
		a0 = x0;
		a1 = x1;
		pi = 'y';
		ai = 'x';
	}
	const inc = p1 > p0 ? 1: -1;
	for(let p = p0; p != p1; p += inc) {
		const a = a0 + Math.round(p * k);
		const pt = { [pi]: p, [ai]: a } as any as I2DCoordinates;
		putPoint( pt, color, out);
	}
}

function drawGrid(out: ImageData) {
	const green = { r: 0, g: 152, b: 0, a: 0.1 };
	drawLine(300, 301, 2300, 301, green, out);
	for(let i = 0; i < 10; i ++) {
		drawLine(300 + i * 100, 100, 300 + i* 100, 301, { ...green, a: 0.1 }, out);
	}
}
// hardness 0.1 = 10, 0.75
// hardness 0.5 = 2.5 1.5
// hardness 1 =

const clonePoint = (p: IPenPointer): IPenPointer => ({
	x: p.x,
	y: p.y,
	size: p.size,
	tangentialPressure: p.tangentialPressure,
	tilt: { x: p.tilt.x, y: p.tilt.y },
	color: p.color,
	twist: p.twist,
})

interface ITestForThicknessConfig {
	startX: number,
	startY: number,
	count: number,
	minSize: number,
	maxSize: number,
	length?: number,
	angle?: number,
}

export async function testBrushToolLine(out: ImageData, editor: PictureEditor) {
	const brushTool = editor.toolManager.currentTool;
	const points = testPoints3;
	const viewport = editor.viewport;
	const baseEventProps = {
		pointerType: 'pen',
		pressure: 1,
		tiltX: 0,
		tiltY: 0,
		tangentialPressure: 0,
		twist: 0,
	}
	console.log('Btool', brushTool, viewport);

	const pointerStartEvent = new PointerEvent('pointerdown', {
		...baseEventProps,
		clientX: points[0].x,
		clientY: points[0].y,
	});

	const delay = (time: number): Promise<void> => new Promise(resolve => {
		setTimeout(() => resolve(), time);
	});

	async function* eventGenerator(): AsyncGenerator<PointerEvent> {
		for(let i = 1; i < points.length; i ++) {
			// await delay(1);
			yield new PointerEvent('pointermove', {
				...baseEventProps,
				pressure: 1,
				clientX: points[i].x,
				clientY: points[i].y
			});
		}
	}

	const pointerEndEvent = new PointerEvent('pointerup');

	viewport.window.dispatchEvent(pointerStartEvent);

	for await(let pointerMoveEvent of eventGenerator()) {
		document.dispatchEvent(pointerMoveEvent);
	}
	document.dispatchEvent(pointerEndEvent);
}

export async function testForCheckingThickness(out: ImageData, {
	startX,
	startY,
	count,
	minSize,
	maxSize,
	length,
	angle,
}: ITestForThicknessConfig = {
	startX: 500,
	startY: 500,
	count: 1,
	minSize: 0.001,
	maxSize: 1,
	length: 800,
	angle: 45
}) {
	if (length === undefined) length = 800;
	if (angle === undefined) angle = 45;
	let dx = length * Math.sin(angle / 180 * Math.PI) / count;
	let dy = length * Math.cos(angle / 180 * Math.PI) / count;
	console.log('DX,DY', { dx, dy });
	let size = minSize;
	const ds = (maxSize - minSize) / count;
	const dfx = 0;
	const dfy = 0;
	let startPoint: IPenPointer = {
		x: startX,
		y: startY,
		size,
		tilt: { x: 0, y: 0},
		tangentialPressure: 0,
		twist: 0,
		color: { r: 195, g: 0, b: 0, a: 1 }
	};
 	let p2 = { ...startPoint };
	let p1 = { ...p2 };
	brushManager.startDraw(startPoint, out);
	for(let i = 0; i < count; i ++) {
		p2 = clonePoint(p1);
		p2.size += ds;
		p2.x += dx;
		p2.y += dy;
		dx += dfx;
		dy += dfy;
		const { endPoint, endDrawPromise } = brushManager.drawLine(p1, p2);
		p1 = endPoint;
		await endDrawPromise;
	}
	const outImage = await brushManager.endDraw();

	const canvas = document.createElement("canvas");
	Object.assign(canvas, { width: outImage.width, height: outImage.height });
	const ctx = canvas.getContext('2d');
	ctx.putImageData(outImage, 0, 0);
	let x = startX;
	let y = startY;
	const brushSize = brushManager.getCurrentBrush().spotSize ?? 10;
	ctx.font = "bold 8px sans";
	for(let i = 0; i < count; i ++) {
		ctx.fillText(`${(size * brushSize).toFixed(2)}`, x + 5, y);
		x += dx;
		y += dy;
		size += ds;
	}
	const output = ctx.getImageData(0, 0, outImage.width, outImage.height);
	out.data.set(output.data);
}

export function testSpotShift(out: ImageData) {
	const brush = brushManager.getCurrentBrush();
	const ystep = 12;
	const count = 5;
	const xstep = 0;
	const rstep = 0.01;
	(<any>brush.brushSettings).size = 5;
	(<any>brush.brushSettings).flow = 0.5;
	(<any>brush.brushSettings).size = 50;
	for (let i = 0; i < count; i+= 1) {
		brush.setSpot({
			x: 520.5 + i * xstep,
			y: 225 + i * ystep,
			color: { r: 255, g: 0, b: 0, a: 1 },
			size: 0.1 + rstep * i,
		} as IPointerBase);
	}
}

export function test1(width: number, height: number): ImageData {
	let x = 10;
	let y = 70;
	let w = 2.05;
	const res = new ImageData(width, height);
	for (let i = 0; i < 6; i ++) {
		dpoints(
			{ x: x, y, width: w, hardness: 1 },
			{ x: x + 300, y: y + 300 , width: w + 0.25, hardness: 1 },
			0.5,
			10,
			res
		);
		w += 0.025;
		y += 10;
	}

	outPtss(res);
	return res;
}

export function test2(width: number, height: number) {
	const red: IRGBA = { r: 255, g: 0, b: 0, a: 1 };
	const rdata = new ImageData(width, height);
	const hardness = 0.01;
	const frame = 30;
	const step = 20;
	const pointsCount = 2;
	const locbase = {
		color: red,
		hardness,
		rotate: 0,
		roundness: 1,
	}

	let c = 0;
	for (var i = 0; i < pointsCount; i ++) {
		const rs = (i + 1);
		const re = (i + 1);
		// const res = brush.getSpot(r, hardness, 1, 0, red);
		// brush.drawTo(rdata, res, { x: 70 + c * step, y: 40 - r }, true);
		brushManager.drawLine({
			...locbase,
			color: colors[6],
			size: rs,
			tilt: { x: 0, y: 0 },
			tangentialPressure: 0,
			twist: 0,
			x: 70 + c,
			y: 40,
		}, {
			...locbase,
			color: colors[6],
			size: re,
			tilt: { x: 0, y: 0 },
			tangentialPressure: 0,
			twist: 0,
			x: 70 + c + step,
			y: 40,
		});
		/* dpoints(
			{ x: 70 + c * 70, y: 60, width, hardness },
			{ x: 70 + c * 70 + 200, y: 350, width: width + 1, hardness },
			1,
			100, rdata
		);*/
		c += step;
	}
	return rdata;
}

export function test3(out: ImageData) {
	const points = testPoints3;
	let pp;
	for(let i = 0; i < points.length; i++) {
		// points[i].hardness = 0.1;
		// points[i].flow = 0.5;
		if (pp) {
			brushManager.drawLine(pp, {
				...points[i],
				size: 1,
				color: { r: 0, g: 0, b: 0, a: 1},
				tilt: { x: 0, y: 0 },
				tangentialPressure: 0,
				twist: 0,
			 });
		}
		pp = points[i];
	}
}

const drawPoint = (x: number, y: number, color: IRGBA, zoom: number, out: ImageData) =>
	putPoint({ x: Math.round(x * zoom) + 300, y: 300 - Math.round(y * zoom) }, color, out);


export function test4(out: ImageData) {
	drawGrid(out);
	const hards = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
	// const hards = [0.5];

	for (let i = 0; i <= 1; i+= 0.005) {
		hards.forEach((h, index) => {

			const y = hardness(i, h);

			drawPoint(i, y, colors[index], 200, out);
		});
	}
}

export function testDrawLine(out: ImageData, points: IPenPointer[]) {
	let p;
	console.log("Points", points);
	for(let i = 0; i < points.length; i ++) {
		if (p) {
			const np = brushManager.drawLine(p, points[i]);
			if (np) p = np;
		} else p = points[i];
	}
}

export function test5(out: ImageData) {
	const points = testPoints5;
	points.forEach(p => brushManager.drawPoint({
		...p,
		tilt: { x: 0, y: 0 },
		tangentialPressure: 0,
		twist: 0,
	}));
}

export function test6(out: ImageData) {
	const point = {
		size: 1,
		tilt: { x: 0, y: 0 },
		tangentialPressure: 0,
		twist: 0,
		x: 600,
		y: 400,
		color: { r: 255, g: 0, b: 0, a: 255 },
	};
	brushManager.startDraw(point, out);
	brushManager.drawPoint(point);

	brushManager.drawPoint({
		size: 1,
		tilt: { x: 0, y: 0 },
		tangentialPressure: 0,
		twist: 0,
		x: 606,
		y: 400,
		color: { r: 255, g: 0, b: 0, a: 255},
	});
}

const colors = [
	{ r: 200, g: 0, b: 0, a: 1 },
	{ r: 230, g: 235, b: 0, a: 1},
	{ r: 0, g: 155, b: 255, a: 1},
	{ r: 255, g: 155, b: 0, a: 1},
	{ r: 255, g: 0, b: 200, a: 1},
	{ r: 120, g: 0, b: 155, a: 1},
	{ r: 0, g: 0, b: 255, a: 1},
	{ r: 125, g: 0, b: 125, a: 1},
	{ r: 125, g: 0, b: 0, a: 1},
	{ r: 25, g: 155, b: 255, a: 1},
	{ r: 125, g: 115, b: 55, a: 1},
]

const getPoints = (p1, p2, color, count) => {
	const hardness = 1;
	let width = p1.width;

	const dx = (p2.x - p1.x) / count;
	const dy = (p2.y - p1.y) / count;
	const dw = Math.round((p2.width - p1.width) / count * 100) / 100;
	const res = [];
	const pt = { ...p1 };
	for (var i = 0; i <= count; i++) {
		res.push({
			hardness,
			color,
			...pt,
			width: Math.round(width * 100) / 100,
		});
		pt.x += dx;
		pt.y += dy;
		width += dw;
	}
	return res;
}

const dpoints = (p1, p2, opacity, count, data) => {
	let lpoint;
	opacity = opacity || 255;

	const pts = getPoints(p1, p2, { r: 128, g: 128, b: 128, a: opacity }, count);
	pts.forEach(pt => {
		if (lpoint) brushManager.drawLine(lpoint, pt, data);
		lpoint = pt;
	});

}

function outPtss(data) {
	let lp = null;
	testPoints1.forEach(pt => {
		if (lp) brushManager.drawLine(lp, {
			...pt,
			tilt: { x: 0, y: 0 },
			tangentialPressure: 0,
			twist: 0,
		}, data);
		lp = pt;
	});
}

var getFullCount = a => {
	var res = 0;
	var al = 0;
	var k = 1 - a;
	var x = 0;
	while(res < 1) { al += a * Math.pow(k, x); res = Math.round(al * 1000) /1000; x ++;}
	return x - 1;
}
