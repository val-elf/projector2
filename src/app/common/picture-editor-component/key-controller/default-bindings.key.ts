import { IKeyControllerOptions } from './models';
import { clearActiveLayer, colorPickerActivator, moveLayerActivator, panoramerActivator, resetZoomProcess, setBrushToolProcess, setEraserToolProcess, temporaryToolDeactivator, zoomInProccess, zoomOutProcess } from './key-processors.default';

export const defaultKeyControllerOptions: IKeyControllerOptions = {
    keyBindings: {
        'AltLeft': {
            onPress: colorPickerActivator,
            onRelease: temporaryToolDeactivator
        },
        'AltRight': {
            onPress: colorPickerActivator,
            onRelease: temporaryToolDeactivator
        },
        'Delete': {
            onRelease: clearActiveLayer,
        },
        'ControlLeft': {
            onPress: moveLayerActivator,
            onRelease: temporaryToolDeactivator,
        },
        'Space': {
            onPress: panoramerActivator,
            onRelease: temporaryToolDeactivator,
        },
        'ControlLeft+NumpadAdd': {
            onPress: evt => {
                console.log('Prevent zoom default');
                evt.preventDefault();
            },
            onRelease: zoomInProccess,
        },
        'ControlLeft+NumpadSubtract': {
            onPress: evt => evt.preventDefault(),
            onRelease: zoomOutProcess,
        },
        'ControlLeft+Digit0': {
            onPress: evt => evt.preventDefault(),
            onRelease: resetZoomProcess,
        },
        'KeyB': {
            onRelease: setBrushToolProcess,
        },
        'KeyE': {
            onRelease: setEraserToolProcess,
        }
    },
}