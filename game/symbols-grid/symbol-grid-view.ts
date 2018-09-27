import * as PIXI from 'pixi.js';
import { SymbolSprite } from './symbols-sprite';

export class SymbolsView extends PIXI.Container {

    constructor() {
        super();
        this.setupSymbols();
        this.y = 50;
        this.x = -200;
    }

    private setupSymbols(): void {
        const placeholder = new PIXI.Graphics();
        placeholder.beginFill(0xFFFFFF);
        placeholder.drawRect(0, 0, 600, 300);
        placeholder.endFill();
        this.addChild(placeholder);
    }
}
