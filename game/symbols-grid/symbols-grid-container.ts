import * as PIXI from 'pixi.js';
import { ISymbolsView } from './symbol-grid-view';
import { SymbolGridTitle } from './symbols-grid-title';
import { injectable, inject } from 'inversify';
import { TweenLite } from 'gsap';
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
        this.x = this.layout.container.offScreenX;
        this.y = this.layout.container.y;
        TweenLite.to(this, 1, { x: this.layout.container.onScreenX});
       
        this.setupContents();
    }

    private setupContents(): void {
        this.symbolsView.setupRows(this.layout.rows);
        this.addChild(new SymbolGridTitle(this.layout.title), this.symbolsView);
    }
}
