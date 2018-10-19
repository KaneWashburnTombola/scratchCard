import * as PIXI from 'pixi.js';
import { ITitleLayout } from '../amounts-grid/amounts-grid-layout';

export class SymbolMatchTitle extends PIXI.Text {
    constructor(titleLayout: ITitleLayout) {
        super(titleLayout.text, {
            fill: 0xFFFFFF,
            fontSize: 22,
            fontFamily: 'Helvetica'
        });
        this.anchor.set(0.5);
    }
}
