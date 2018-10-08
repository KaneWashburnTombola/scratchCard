import * as PIXI from 'pixi.js';
import { SymbolMatchTitle } from './symbols-match-title';
import { SymbolsToMatchView } from './symbols-match-view';
import container from '../../bootstrap/ioc-setup';

export class SymbolMatchContainer extends PIXI.Container {

    constructor() {
        super();
        this.setupContent();
        this.x = 625;
        this.y = 100;
    }

    private setupContent(): void {
        const symbolsToMatchView = container.get<SymbolsToMatchView>(SymbolsToMatchView);
        this.addChild(new SymbolMatchTitle(), symbolsToMatchView);
    }
}
