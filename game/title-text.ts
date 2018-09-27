import * as PIXI from 'pixi.js';

export class TitleText extends PIXI.Text {
    constructor() {
        super('This is Title Text', {
            fill: 0xFFFFFF,
            fontSize: 28,
            fontFamily: 'Helvetica'
        });
        this.anchor.set(0.5);
        this.x = 625;
        this.y = 50;
    }
}
