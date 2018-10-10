import * as PIXI from 'pixi.js';
import { AmountsGridTitle } from './amounts-grid-title';
import { inject, injectable } from 'inversify';
import { symbols } from '../../constants/ioc-symbols';
import { IAmountsGridLayout } from './amounts-grid-layout';
import { IAmountsView } from './amounts-grid-view';

@injectable()
export class AmountsGridContainer extends PIXI.Container {
    constructor(
        @inject(symbols.amountsGridLayout) private amountsGridLayout: IAmountsGridLayout,
        @inject(symbols.amountsView) private amountsView: IAmountsView
    ) {
        super();
        this.x = this.amountsGridLayout.layout.container.x;
        this.y = this.amountsGridLayout.layout.container.y;

        this.setupContents();
    }

    private setupContents(): void {
        this.amountsView.setupValues(this.amountsGridLayout.layout.gridView);
        this.addChild(new AmountsGridTitle(), this.amountsView);
    }
}
