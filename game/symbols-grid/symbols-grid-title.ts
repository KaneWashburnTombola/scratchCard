import * as PIXI from 'pixi.js';

export class SymbolGridTitle extends PIXI.Text {
    constructor() {
        super('This is Symbol Grid Title Text', {
            fill: 0xFFFFFF,
            fontSize: 22,
            fontFamily: 'Helvetica'
        });
        this.x = 100;
        this.anchor.set(0.5);
    }
}
