import {
	brushManager,
	test1,
	test2,
	test3,
	test4,
	test5,
	test6,
	testDrawLine,
	testForCheckingThickness,
	testSpotShift
} from "./brush-tests";
import { BrushTool, IBrush, ILayersManager, PictureEditor, SampledTestBrush } from "picture-editor";
import { testPoints1, testPoints2 } from './points';

export function runTests(editor: PictureEditor, brush?: IBrush){
	const { layersManager } = editor;
    const layer = layersManager.activeLayer;
	if (!layer) return;
	brush = brush ?? new SampledTestBrush(10, 1, 1);
	(<any>brush).minSize = 0.0;
	(<any>brush).stepRatio = 0.2;

	brushManager.setBrush(brush);
	setTimeout(() => {
		console.log("Start test brush");
		const wl = layersManager.initWorkingLayer({ x: 0, y: 0, width: 3000, height: 3000 });

		// tests zone
		// testSpotShift(wl.source);
		// testForCheckingThickness(wl.source, { startX: 520, startY: 220, count: 1, minSize: 0.001, maxSize: 1, length: 630, angle: 40 });
		// testForCheckingThickness(wl.source, { startX: 520, startY: 220, count: 1, minSize: 0.01, maxSize: 1, angle: 6, length: 300 });
		// testForCheckingThickness(wl.source, { startX: 620, startY: 220, count: 20, minSize: 0.001, maxSize: 1, angle: 6, length: 300 });
		testDrawLine(wl.source, testPoints2);

		// end tests zone

		wl.setSource(wl.source);
		layer.applyWorkingChanges();
		layersManager.releaseWorkingLayer();
		console.log("Applyed tests");
	});

}