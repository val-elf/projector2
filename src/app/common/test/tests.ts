import {
	test1,
	test2,
	test3,
	test4,
	test5,
	test6,
	testForCheckingThickness
} from "./brush-test";
import { ILayersManager } from "picture-editor";

export function runTests(layersManager: ILayersManager){
    const layer = layersManager.activeLayer;
	if (!layer) return;
	setTimeout(() => {
		console.log("Start test brush");

		const wl = layersManager.initWorkingLayer({ x: 0, y: 0, width: 3000, height: 3000 });
		testForCheckingThickness(wl.source);
		// test3(wl.source);
		// test6(wl.source);
		// test4(wl.source); - lines of harndess formula
		wl.setSource(wl.source);
		layer.applyWorkingChanges();
		layersManager.releaseWorkingLayer();
		console.log("Applyed tests");
	});

}