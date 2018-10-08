import * as PIXI from 'pixi.js';
import { SymbolsRowView } from './symbol-row-view';
import { inject } from 'inversify';
import { symbols } from '../../constants/ioc-symbols';

export class SymbolsView extends PIXI.Container {
    constructor(@inject(symbols.symbolsRowViewFactory) createSymbolRowView: () => SymbolsRowView) {
        super();
        this.y = 50;
        this.x = -200;

        for (let x = 0; x < 3; x++) {
            const row: SymbolsRowView = createSymbolRowView();
            row.y = x * 100;
            this.addChild(row);
        }
    }
}
