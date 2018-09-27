import * as PIXI from 'pixi.js';
import { BaseContainer } from './base-container';

interface IResources {
    [index: string]: PIXI.loaders.Resource;
}

export class PIXISetup {
    private pixiApp: PIXI.Application = new PIXI.Application(1250, 720);
    private loader: PIXI.loaders.Loader = new PIXI.loaders.Loader();
    public launch(): void {

        document.body.appendChild(this.pixiApp.view);
        this.loader.add('textures', 'assets/textures.json');
        this.loader.load((_loader: PIXI.loaders.Loader, resources: IResources) => {
            this.loadActualAssets(resources.textures.data);
        });
    }

    private loadActualAssets(resources: IResources): void {
        for (const resourceKey of Object.keys(resources)) {
            this.loader.add(resourceKey, resources[resourceKey]);
        }
        this.loader.load((loader: PIXI.loaders.Loader, resources: IResources) => {
            this.pixiApp.stage.addChild(new BaseContainer())
        });
    }
}

export const pixiSetup = new PIXISetup();
