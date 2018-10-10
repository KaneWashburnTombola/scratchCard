import * as PIXI from 'pixi.js';
import { ISymbolSprite } from '../symbols-grid/symbols-sprite';
import { inject, injectable } from 'inversify';
import { symbols } from '../../constants/ioc-symbols';
import { ISymbolConfig } from './amounts-grid-layout';

export interface IAmountsRowView extends PIXI.Container {
    setupSymbols: (config: ISymbolConfig) => void;
}

@injectable()
export class AmountsRowView extends PIXI.Container {

    constructor(@inject(symbols.symbolSprite) private symbolSprite: ISymbolSprite) {
        super();
    }

    public setupSymbols(config: ISymbolConfig): void {
        for (let x = 0; x < config.numberOfSymbols; x++) {
            const symbol = this.symbolSprite.generateSymbol(Math.floor(Math.random() * 16), config, x);
            this.addChild(symbol);
        }
    }
}
