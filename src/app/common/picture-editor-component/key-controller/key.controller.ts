import { PictureEditor } from 'picture-editor';
import { defaultKeyControllerOptions } from './default-bindings.key';
import { IKeyControllerOptions } from './models';


export class KeyController {
    private options: IKeyControllerOptions;
    private keyCodes = [];

    private get keyCode() {
        return this.keyCodes.join('+');
    }

    constructor(
        private readonly pictureEditor: PictureEditor,
        private readonly hostElement: HTMLElement,
        options?: IKeyControllerOptions,
    ) {
        options = { ...defaultKeyControllerOptions, ...options ?? {} };
        this.init(options);
    }

    private init(options: IKeyControllerOptions) {
        this.options = options;
        window.addEventListener('keydown', this.windowKeyDownProcess, { capture: true });
        window.addEventListener('blur', () => {
            this.keyCodes = [];
        });
        this.hostElement.addEventListener('keydown', this.keyDownProcess);
        this.hostElement.addEventListener('keyup', this.keyUpProcess);
        window.addEventListener('keyup', this.windowKeyUpProcess);
    }

    private windowKeyDownProcess = (evt: KeyboardEvent) => {
        if (evt.repeat) return;
        if (!this.keyCodes.includes(evt.code)) this.keyCodes.push(evt.code);
    }

    private windowKeyUpProcess = (evt: KeyboardEvent) => {
        if (this.keyCodes.includes(evt.code)) {
            const index = this.keyCodes.indexOf(evt.code);
            this.keyCodes.splice(index, 1);
        }
    }

    private keyDownProcess = (evt: KeyboardEvent) => {
        if (evt.repeat) return;
        const processor = this.options.keyBindings[this.keyCode];
        if (processor?.onPress) {
            processor?.onPress(evt, this.pictureEditor);
        }
    }

    private keyUpProcess = (evt: KeyboardEvent) => {
        const processor = this.options.keyBindings[this.keyCode];
        if (processor?.onRelease) {
            processor?.onRelease(evt, this.pictureEditor);
        }
    }

}