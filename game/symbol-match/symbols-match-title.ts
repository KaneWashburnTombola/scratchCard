import * as PIXI from 'pixi.js';

export class SymbolMatchTitle extends PIXI.Text {
    constructor() {
        super('This is Symbol Match Title Text', {
            fill: 0xFFFFFF,
            fontSize: 22,
            fontFamily: 'Helvetica'
        });
        this.anchor.set(0.5);
    }
}
