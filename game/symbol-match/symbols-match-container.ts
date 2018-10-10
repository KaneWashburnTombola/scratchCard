import * as PIXI from 'pixi.js';
import { SymbolMatchTitle } from './symbols-match-title';
import { SymbolsToMatchView, ISymbolsToMatchView } from './symbols-match-view';
import container from '../../bootstrap/ioc-setup';
import { inject, injectable } from 'inversify';
import { symbols } from '../../constants/ioc-symbols';
import { ISymbolsToMatchLayout, IMatchLayout } from './symbol-match-layout';

@injectable()
export class SymbolMatchContainer extends PIXI.Container {
    private layout: IMatchLayout;
    constructor(
        @inject(symbols.symbolsToMatchLayout) private symbolsMatchLayout: ISymbolsToMatchLayout, 
        @inject(symbols.symbolsToMatchView) private symbolsToMatchView: ISymbolsToMatchView
    ) {
        super();
        this.layout = this.symbolsMatchLayout.layout;
        this.x = this.layout.container.x;
        this.y = this.layout.container.y;
        this.setupContent();
    }

    private setupContent(): void {
        this.symbolsToMatchView.setupSymbols(this.layout.symbolConfig);
        this.addChild(new SymbolMatchTitle(this.layout.title), this.symbolsToMatchView);
    }
}
