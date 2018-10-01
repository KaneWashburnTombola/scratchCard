import * as PIXI from 'pixi.js';
import { SymbolsRowView } from './symbol-row-view';

export class SymbolsView extends PIXI.Container {

    constructor() {
        super();
        this.setupRows();
        this.y = 50;
        this.x = -200;
    }

    private setupRows(): void {
        for (let x = 0; x < 3; x++) {
            this.addChild(new SymbolsRowView(x * 100));
        }
    }
}
