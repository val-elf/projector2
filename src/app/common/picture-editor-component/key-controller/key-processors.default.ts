import { BrushTool, ColorPickerTool, EraserTool, MoveLayerTool, PanoramerTool, PictureEditor } from 'picture-editor';

export function colorPickerActivator(evt: KeyboardEvent, pictureEditor: PictureEditor) {
    const { toolManager } = pictureEditor;
    toolManager.temporaryActivateTool(ColorPickerTool);
}

export function temporaryToolDeactivator(evt: KeyboardEvent, pictureEditor: PictureEditor) {
    pictureEditor.toolManager.temporaryDeactivateTool();
}

export function clearActiveLayer(evt: KeyboardEvent, pictureEditor: PictureEditor) {
    pictureEditor.layersManager.activeLayer?.clean();
}

export function moveLayerActivator(evt: KeyboardEvent, pictureEditor: PictureEditor) {
    evt.preventDefault();
    pictureEditor.toolManager.temporaryActivateTool(MoveLayerTool);
}

export function panoramerActivator(evt: KeyboardEvent, pictureEditor: PictureEditor) {
    evt.preventDefault();
    pictureEditor.toolManager.temporaryActivateTool(PanoramerTool);
}

export function zoomInProccess(evt: KeyboardEvent, pictureEditor: PictureEditor) {
    pictureEditor.page.zoomIn();
}

export function zoomOutProcess(evt: KeyboardEvent, pictureEditor: PictureEditor) {
    pictureEditor.page.zoomOut();
}

export function resetZoomProcess(evt: KeyboardEvent, pictureEditor: PictureEditor) {
    pictureEditor.page.resetZoom();
}

export function setBrushToolProcess(evt: KeyboardEvent, pictureEditor: PictureEditor) {
    pictureEditor.setActiveTool(BrushTool);
}

export function setEraserToolProcess(evt: KeyboardEvent, pictureEditor: PictureEditor) {
    const brushTool = pictureEditor.toolManager.getToolInstance<BrushTool>(BrushTool);
    const brush = brushTool.brush;
    const eraserTool = pictureEditor.setActiveTool(EraserTool);
    eraserTool.setBrush(brush);
}