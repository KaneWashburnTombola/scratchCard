import * as PIXI from 'pixi.js';
import { ITitleLayout } from './amounts-grid-layout';

export class AmountsGridTitle extends PIXI.Text {
    constructor(titleLayout: ITitleLayout) {
        super(titleLayout.text, {
            fill: 0xFFFFFF,
            fontSize: 22,
            fontFamily: 'Helvetica'
        });
        this.anchor.set(0.5);
    }
}
