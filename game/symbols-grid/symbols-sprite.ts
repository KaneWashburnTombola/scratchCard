import * as PIXI from 'pixi.js';
import { symbolMapper } from '../../assets/symbol-mapper';
import { textureCache } from '../../assets/textureCache';

interface ISymbolConfig {
    positions: number[];
    size: number;
}

export class SymbolSprite extends PIXI.Sprite {
    constructor(symbolNumber: number, config: ISymbolConfig, positionIndex: number) {
        console.log(textureCache[symbolMapper[symbolNumber]].textures)
        super(PIXI.utils.TextureCache[symbolMapper[symbolNumber]])
        this.height = config.size;
        this.width = config.size;
        this.x = config.positions[positionIndex];
        this.y = 25;
        this.anchor.set(0.5);
    }
}
