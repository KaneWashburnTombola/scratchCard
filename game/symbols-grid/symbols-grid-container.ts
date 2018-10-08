import * as PIXI from 'pixi.js';
import { SymbolsView } from './symbol-grid-view';
import { SymbolGridTitle } from './symbols-grid-title';
import container from '../../bootstrap/ioc-setup';

export class SymbolsGridContainer extends PIXI.Container {
    constructor() {
        super();
        this.x = 250;
        this.y = 250;

        this.setupContents();
    }

    private setupContents(): void {
        const symbolsView = container.get<SymbolsView>(SymbolsView);
        this.addChild(new SymbolGridTitle(), symbolsView);
    }
}
