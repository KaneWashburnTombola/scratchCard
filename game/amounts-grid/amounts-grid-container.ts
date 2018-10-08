import * as PIXI from 'pixi.js';
import { AmountsGridTitle } from './amounts-grid-title';
import { AmountsView } from './amounts-grid-view';
import container from '../../bootstrap/ioc-setup';

export class AmountsGridContainer extends PIXI.Container {
    constructor() {
        super();
        this.x = 1000;
        this.y = 250;

        this.setupContents();
    }

    private setupContents(): void {
        const amountsView = container.get<AmountsView>(AmountsView);
        this.addChild(new AmountsGridTitle(), amountsView);
    }
}
