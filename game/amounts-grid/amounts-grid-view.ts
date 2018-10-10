import * as PIXI from 'pixi.js';
import { AmountsRowView } from './amounts-row-view';
import { inject } from 'inversify';
import { symbols } from '../../constants/ioc-symbols';
import { IGridLayout } from './amounts-grid-layout';

export interface IAmountsView extends PIXI.Container {
    setupValues: (layout: IGridLayout) => void;
}

export class AmountsView extends PIXI.Container implements IAmountsView {

    constructor(@inject(symbols.amountsRowViewFactory) private createAmountsRowViews: () => AmountsRowView) {
        super();
    }

    public setupValues(layout: IGridLayout): void {
        this.y = layout.y;
        this.x = layout.x;

        for (let x = 0; x < layout.numberOfRows; x++) {
            const row: AmountsRowView = this.createAmountsRowViews();
            row.y = x * 100;
            row.setupSymbols(layout.rowView.symbolConfig);
            this.addChild(row);
        }
    }
}
