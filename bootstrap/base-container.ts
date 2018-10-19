import * as PIXI from 'pixi.js';
import { GameView } from '../game-ui/game-view';

export class BaseContainer extends PIXI.Container {
    constructor() {
        super();
        const background = new PIXI.Graphics();
        background.beginFill(0x031BA1);
        background.drawRect(0, 0, 1250, 720);
        background.endFill();
        this.addChild(background, new GameView());
    }
}
