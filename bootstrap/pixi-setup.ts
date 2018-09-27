import * as PIXI from 'pixi.js';
import { IResources } from '../assets/textureCache';
import { BaseContainer } from './base-container';

export class PIXISetup {
    public launch(): void {
        const pixiApp = new PIXI.Application(1250, 720);
        const loader = new PIXI.loaders.Loader();
        document.body.appendChild(pixiApp.view);
        loader.add('textures', 'assets/textures.json');
        loader.load((_loader: PIXI.loaders.Loader, resources: IResources) => {
            // setTextureCache(resources);
            pixiApp.stage.addChild(new BaseContainer());
        });
    }
}

export const pixiSetup = new PIXISetup();
