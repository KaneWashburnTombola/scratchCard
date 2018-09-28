import * as PIXI from 'pixi.js';

export class AmountsView extends PIXI.Container {

    constructor() {
        super();
        this.setupSymbols();
        this.y = 50;
        this.x = -200;
    }

    private setupSymbols(): void {
        const placeholder = new PIXI.Graphics();
        placeholder.beginFill(0x01147E);
        placeholder.drawRect(0, 0, 400, 300);
        placeholder.endFill();
        this.addChild(placeholder);
    }
}
