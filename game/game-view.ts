import * as PIXI from 'pixi.js';
import { AmountsGridContainer } from './amounts-grid/amounts-grid-container';
import { SymbolMatchContainer } from './symbol-match/symbols-match-container';
import { SymbolsGridContainer } from './symbols-grid/symbols-grid-container';
import { TitleText } from './title-text';
import container from '../bootstrap/ioc-setup';

export class GameView extends PIXI.Container {
    constructor() {
        super();
        this.setupScene();
    }

    private setupScene(): void {
        this.createTitleSection();
    }

    private createTitleSection(): void {
        const amountsGridContainer = container.get<AmountsGridContainer>(AmountsGridContainer);
        this.addChild(new TitleText(), new SymbolMatchContainer(), new SymbolsGridContainer(), amountsGridContainer);
    }
}
