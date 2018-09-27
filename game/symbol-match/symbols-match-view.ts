import * as PIXI from 'pixi.js';
import { SymbolSprite } from '../symbols-grid/symbols-sprite';

export class SymbolsToMatchView extends PIXI.Container {

    constructor() {
        super();
        this.setupSymbols();
        this.y = 50;
        this.x = -200;
    }

    private setupSymbols(): void {
        const placeholder = new PIXI.Graphics();
        placeholder.beginFill(0xFFFFFF);
        placeholder.drawRect(0, 0, 400, 50);
        placeholder.endFill();
        this.addChild(placeholder);
        const symbolConfig = {
            positions: [ 40, 120, 200, 280, 360 ],
            size: 50
        } 
        for (let x = 0; x < 5; x++) {
            this.addChild(new SymbolSprite(Math.floor(Math.random() * 5), symbolConfig, x));
        }
    }
}
