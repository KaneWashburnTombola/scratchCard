import * as PIXI from 'pixi.js';
import { AmountsRowView } from './amounts-row-view';

export class AmountsView extends PIXI.Container {

    constructor() {
        super();
        this.setupRows();
        this.y = 50;
        this.x = -175;
    }

    private setupRows(): void {
        for (let x = 0; x < 3; x++) {
            this.addChild(new AmountsRowView(x * 100));
        }
    }
}
