import * as PIXI from 'pixi.js';
import { BaseContainer } from './base-container';
import { texturesUrls } from '../assets/textures';
import { IResources, setTextureCache } from '../assets/textureCache';

export class PIXISetup {
    private pixiApp: PIXI.Application = new PIXI.Application(1250, 720);
    private loader: PIXI.loaders.Loader = new PIXI.loaders.Loader();
    public launch(): void {

        document.body.appendChild(this.pixiApp.view);

        let options = {
            crossOrigin: true
        };

        for (const texture of Object.keys(texturesUrls)) {
            this.loader.add(texture, texturesUrls[texture], options);
        }

        this.loader.load((_loader: PIXI.loaders.Loader, resources: IResources) => {
            setTextureCache(resources);
            this.pixiApp.stage.addChild(new BaseContainer());
        });
    }
}

export const pixiSetup = new PIXISetup();
