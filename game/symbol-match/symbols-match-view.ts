import * as PIXI from 'pixi.js';
import { ISymbolSprite } from '../symbols-grid/symbols-sprite';
import { inject, injectable } from 'inversify';
import { symbols } from '../../constants/ioc-symbols';
import { ISymbolConfig } from '../amounts-grid/amounts-grid-layout';
import { Back, TweenLite} from 'gsap';

export interface ISymbolsToMatchView extends PIXI.Container {
    setupSymbols: (layout: ISymbolConfig) => void;
}

@injectable()
export class SymbolsToMatchView extends PIXI.Container implements ISymbolsToMatchView {
    private symbols: PIXI.extras.AnimatedSprite[] = [];
    constructor(@inject(symbols.symbolSprite) private symbolSprite: ISymbolSprite) {
        super();
        this.y = 50;
        this.x = -250;
    }

    public setupSymbols(layout: ISymbolConfig): void {
        let symbol: PIXI.extras.AnimatedSprite;
        let startTime: number = 0;

        for (let x = 0; x < layout.numberOfSymbols; x++) {
            symbol = this.symbolSprite.generateSymbol(Math.floor(Math.random() * 16), layout, x)
            this.symbols.push(symbol);
            symbol.scale.set(0);
            TweenLite.to(symbol.scale, 1, {x: 0.6, y: 0.6, ease: Back.easeOut.config(4), delay: startTime});
            startTime += 0.5;
            this.addChild(symbol);
            symbol.play();
        }
    }
}
