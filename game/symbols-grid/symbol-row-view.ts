import * as PIXI from 'pixi.js';
import { ISymbolSprite } from './symbols-sprite';
import { inject, injectable } from 'inversify';
import { symbols } from '../../constants/ioc-symbols';

@injectable()
export class SymbolsRowView extends PIXI.Container {

    constructor(@inject(symbols.symbolSprite) private symbolSprite: ISymbolSprite) {
        super();
        this.setupSymbols();
    }

    private setupSymbols(): void {
        const symbolConfig = {
            positions: [50, 175, 300, 425, 550],
            size: 75
        }
        for (let x = 0; x < 5; x++) {
            const symbol = this.symbolSprite.generateSymbol(Math.floor(Math.random() * 16), symbolConfig, x)
            this.addChild(symbol);
        }
    }
}
