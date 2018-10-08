import * as PIXI from 'pixi.js';
import { symbolMapper } from '../../assets/symbol-mapper';
import { textureCache } from '../../assets/textureCache';
import { injectable } from 'inversify';

interface ISymbolConfig {
    positions: number[];
    size: number;
}

export interface ISymbolSprite {
    generateSymbol: (symbolNumber: number, config: ISymbolConfig, positionIndex: number) => PIXI.extras.AnimatedSprite
}

@injectable()
export class SymbolSprite implements ISymbolSprite {
    private totalLoops: number;
    private loopCount: number;

    constructor() {
        this.loopCount = 0;
        this.totalLoops = 3;
    }

    public generateSymbol(symbolNumber: number, config: ISymbolConfig, positionIndex: number): PIXI.extras.AnimatedSprite {
        const frames = textureCache[symbolMapper[symbolNumber]].textures;
        const textureArray: PIXI.Texture[] = [];

        for (const frame of Object.keys(frames as {})) {
            textureArray.push(frames![frame]);
        }

        const symbol: PIXI.extras.AnimatedSprite = new PIXI.extras.AnimatedSprite(textureArray);

        symbol.height = config.size;
        symbol.width = config.size;
        symbol.x = config.positions[positionIndex];
        symbol.y = 25;
        symbol.animationSpeed = 0.5;
        symbol.anchor.set(0.5);
        symbol.onLoop = this.onAnimationLoop.bind(this, symbol);
        symbol.play();
        return symbol;
    }

    private onAnimationLoop(symbol: PIXI.extras.AnimatedSprite): void {
        this.loopCount++;
    
        if (this.totalLoops === this.loopCount) {
             symbol.stop();
             this.loopCount = 0;
        }
    }
}
