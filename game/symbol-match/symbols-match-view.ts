import * as PIXI from 'pixi.js';
import { ISymbolSprite } from '../symbols-grid/symbols-sprite';
import { inject, injectable } from 'inversify';
import { symbols } from '../../constants/ioc-symbols';
import { ISymbolConfig } from '../amounts-grid/amounts-grid-layout';

export interface ISymbolsToMatchView extends PIXI.Container {
    setupSymbols: (layout: ISymbolConfig) => void;
}

@injectable()
export class SymbolsToMatchView extends PIXI.Container implements ISymbolsToMatchView {

    constructor(@inject(symbols.symbolSprite) private symbolSprite: ISymbolSprite) {
        super();
        this.y = 50;
        this.x = -250;
    }

    public setupSymbols(layout: ISymbolConfig): void {
        for (let x = 0; x < layout.numberOfSymbols; x++) {
            const symbol = this.symbolSprite.generateSymbol(Math.floor(Math.random() * 16), layout, x)
            this.addChild(symbol);
        }
    }
}
