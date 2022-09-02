import {
	brushManager,
	test1,
	test2,
	test3,
	test4,
	test5,
	test6,
	testDrawLine,
	testForCheckingThickness
} from "./brush-tests";
import { BrushTool, ILayersManager, PictureEditor } from "picture-editor";
import { testPoints1, testPoints2 } from './points';

export function runTests(editor: PictureEditor){
	const { layersManager } = editor;
    const layer = layersManager.activeLayer;
	if (!layer) return;
	brushManager.setBrush(editor.toolManager.getToolInstance<BrushTool>(BrushTool).brush);
	setTimeout(() => {
		console.log("Start test brush");
		const wl = layersManager.initWorkingLayer({ x: 0, y: 0, width: 3000, height: 3000 });

		// tests zone

		testForCheckingThickness(wl.source);
		// testDrawLine(wl.source, testPoints2);

		// end tests zone

		wl.setSource(wl.source);
		layer.applyWorkingChanges();
		layersManager.releaseWorkingLayer();
		console.log("Applyed tests");
	});

}