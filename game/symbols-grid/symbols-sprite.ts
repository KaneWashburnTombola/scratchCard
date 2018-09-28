import * as PIXI from 'pixi.js';
import { symbolMapper } from '../../assets/symbol-mapper';
import { textureCache } from '../../assets/textureCache';

interface ISymbolConfig {
    positions: number[];
    size: number;
}

export class SymbolSprite extends PIXI.extras.AnimatedSprite {
    private totalLoops: number;
    private loopCount: number;

    constructor(symbolNumber: number, config: ISymbolConfig, positionIndex: number) {
        const frames = textureCache[symbolMapper[symbolNumber]].textures;
        const textureArray: PIXI.Texture[] = [];
    
        for (const frame of Object.keys(frames as {})) {
            textureArray.push(frames![frame]);
        }       
        super(textureArray)
        this.height = config.size;
        this.width = config.size;
        this.x = config.positions[positionIndex];
        this.loopCount = 0;
        this.totalLoops = 3;
        this.animationSpeed = 0.5;
        this.y = 25;
        this.anchor.set(0.5);
        this.onLoop = this.onAnimationLoop.bind(this);
        this.play();
    }

    private onAnimationLoop(): void {
        this.loopCount++;

        if (this.totalLoops && this.totalLoops === this.loopCount) {
            this.stop();
        }
    }
}
