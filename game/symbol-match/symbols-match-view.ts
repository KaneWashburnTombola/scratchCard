import * as PIXI from 'pixi.js';
import { SymbolSprite } from '../symbols-grid/symbols-sprite';

export class SymbolsToMatchView extends PIXI.Container {

    constructor() {
        super();
        this.setupSymbols();
        this.y = 50;
        this.x = -250;
    }

    private setupSymbols(): void {
        const symbolConfig = {
            positions: [ 50, 150, 250, 350, 450 ],
            size: 75
        } 
        for (let x = 0; x < 5; x++) {
            this.addChild(new SymbolSprite(Math.floor(Math.random() * 16), symbolConfig, x));
        }
    }
}
