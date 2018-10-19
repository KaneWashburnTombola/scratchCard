import * as PIXI from 'pixi.js';
import { ITitleLayout } from '../amounts-grid/amounts-grid-layout';

export class SymbolGridTitle extends PIXI.Text {
    constructor(layout: ITitleLayout) {
        super(layout.text, {
            fill: 0xFFFFFF,
            fontSize: 22,
            fontFamily: 'Helvetica'
        });
        this.x = layout.x;
        this.anchor.set(0.5);
    }
}
