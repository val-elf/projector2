import { PictureEditor } from 'picture-editor';

export type TKeyAction = (evt: KeyboardEvent, pictureEditor: PictureEditor) => void;

export interface IKeyControllerOptions {
    keyBindings: { [key: string]: {
            onPress?: TKeyAction,
            onRelease?: TKeyAction
        }
    };
}


