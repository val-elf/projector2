import { ILayerStoreInitial, OverlayMappingEnum } from 'picture-editor';

export const mockLayers: ILayerStoreInitial[] = [
	/*{
		//active: true,
		img: '/srv/file/5c3716387ea9e45ea4d9c8f7',
		name: 'layer 1'
	},*/
	{
		opacity: 1,
		img: '/assets/img/mocks/layer-sample.png',
		name: undefined,
	},
	{
		//active: true,
		composite: OverlayMappingEnum.hardLight,
		opacity: 1,
		img: '/assets/img/mocks/layer-sample-0.png',
		name: 'layer 3'
	},
	{
		opacity: 0.4,
		img: '/assets/img/mocks/layer-sample.png',
		name: 'layer 4'
	},
	/*{
		active: true,
		opacity: 0.5,
		img: '/srv/file/5c3716387ea9e45ea4d9c8f7',
		name: 'layer 5'
	},*/
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
	},
].map((l, index) => Object.assign(l, { id: index.toFixed(0) }));