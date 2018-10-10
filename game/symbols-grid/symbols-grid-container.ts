import * as PIXI from 'pixi.js';
import { ISymbolsView } from './symbol-grid-view';
import { SymbolGridTitle } from './symbols-grid-title';
import { injectable, inject } from 'inversify';
import { ISymbolsGridLayout, ISymbolsLayout } from './sybols-grid-layout';
import { symbols } from '../../constants/ioc-symbols';

@injectable()
export class SymbolsGridContainer extends PIXI.Container {
    private layout: ISymbolsLayout;
    constructor(
        @inject(symbols.symbolsGridLayout) symbolsGridLayout: ISymbolsGridLayout,
        @inject(symbols.symbolsView) private symbolsView: ISymbolsView
        ) {
        super();
        this.layout = symbolsGridLayout.layout;
        this.x = this.layout.container.x;
        this.y = this.layout.container.y;

        this.setupContents();
    }

    private setupContents(): void {
        this.symbolsView.setupRows(this.layout.rows);
        this.addChild(new SymbolGridTitle(this.layout.title), this.symbolsView);
    }
}
