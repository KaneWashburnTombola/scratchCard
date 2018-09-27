import * as PIXI from 'pixi.js';
import { symbolMapper } from '../../assets/symbol-mapper';

interface ISymbolConfig {
    positions: number[];
    size: number;
}

export class SymbolSprite extends PIXI.Sprite {
    constructor(symbolNumber: number, config: ISymbolConfig, positionIndex: number) {
        super(PIXI.utils.TextureCache[symbolMapper[symbolNumber]])
        this.height = config.size;
        this.width = config.size;
        this.x = config.positions[positionIndex];
        this.y = 25;
        this.anchor.set(0.5);
    }
}
