import * as PIXI from 'pixi.js';
import { SymbolSprite } from '../symbols-grid/symbols-sprite';

export class AmountsRowView extends PIXI.Container {

    constructor(yPosition: number) {
        super();
        this.setupSymbols();
        this.y = yPosition;
    }

    private setupSymbols(): void {
        const symbolConfig = {
            positions: [ 50, 175, 300],
            size: 75
        } 
        for (let x = 0; x < 3; x++) {
            this.addChild(new SymbolSprite(Math.floor(Math.random() * 16), symbolConfig, x));
        }
    }
}
