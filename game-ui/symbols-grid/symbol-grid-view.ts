import * as PIXI from 'pixi.js';
import { SymbolsRowView } from './symbol-row-view';
import { inject } from 'inversify';
import { symbols } from '../../constants/ioc-symbols';
import { IRowConfig } from './sybols-grid-layout';

export interface ISymbolsView extends PIXI.Container {
    setupRows: (layout: IRowConfig) => void;
}

export class SymbolsView extends PIXI.Container {
    constructor(@inject(symbols.symbolsRowViewFactory) private createSymbolRowView: () => SymbolsRowView) {
        super();
    }

    public setupRows(layout: IRowConfig): void {
        this.y = layout.y;
        this.x = layout.x;

        for (let x = 0; x < layout.numberOfRows; x++) {
            const row: SymbolsRowView = this.createSymbolRowView();
            row.y = x * 100;
            row.setupSymbols(layout.symbolConfig);
            this.addChild(row);
        }
    }
}
