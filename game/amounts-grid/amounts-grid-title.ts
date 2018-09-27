import * as PIXI from 'pixi.js';

export class AmountsGridTitle extends PIXI.Text {
    constructor() {
        super('This is Amounts Grid Title Text', {
            fill: 0xFFFFFF,
            fontSize: 22,
            fontFamily: 'Helvetica'
        });
        this.anchor.set(0.5);
    }
}
