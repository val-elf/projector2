import { ILayerStoreInitial, OverlayMappingEnum } from 'picture-editor';

export const mockLayers: ILayerStoreInitial[] = [
	{
		opacity: 1,
		//img: '/assets/img/mocks/layer-sample-0.png',
		name: 'Layer 1',
		backgroundColor: 'rgba(255,255,255, 1)',
	},
	/*{
		//active: true,
		composite: OverlayMappingEnum.hardLight,
		opacity: 0.6,
		img: '/assets/img/mocks/layer-sample-0.png',
		name: 'layer 3'
	},
	{
		opacity: 1,
		img: '/assets/img/mocks/layer-sample.png',
		name: 'layer 4'
	},
	{
		opacity: 0.4,
		img: '/assets/img/mocks/layer-sample.png',
		name: 'layer 6'
	},
	{
		opacity: 0.4,
		img: '/assets/img/mocks/layer-sample.png',
		name: 'layer 7'
	},
	{
		opacity: 0.4,
		img: '/assets/img/mocks/layer-sample.png',
		name: 'layer 8'
	},
	{
		opacity: 0.4,
		img: '/assets/img/mocks/layer-sample.png',
		name: 'layer 9'
	},
	{
		opacity: 0.4,
		img: '/assets/img/mocks/layer-sample.png',
		name: 'layer 10'
	},*/
].map((l, index) => Object.assign(l, { id: index.toFixed(0) }));