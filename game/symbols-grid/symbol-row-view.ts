import * as PIXI from 'pixi.js';
import { ISymbolSprite } from './symbols-sprite';
import { inject, injectable } from 'inversify';
import { symbols } from '../../constants/ioc-symbols';
import { ISymbolConfig } from '../amounts-grid/amounts-grid-layout';

export interface ISymbolsRowView extends PIXI.Container {
    setupSymbols: (config: ISymbolConfig) => void;
}

@injectable()
export class SymbolsRowView extends PIXI.Container {

    constructor(@inject(symbols.symbolSprite) private symbolSprite: ISymbolSprite) {
        super();
    }

    public setupSymbols(layout: ISymbolConfig): void {
           for (let x = 0; x < layout.numberOfSymbols; x++) {
            const symbol = this.symbolSprite.generateSymbol(Math.floor(Math.random() * 16), layout, x)
            this.addChild(symbol);
        }
    }
}
