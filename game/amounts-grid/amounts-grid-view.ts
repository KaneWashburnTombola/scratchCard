import * as PIXI from 'pixi.js';
import { AmountsRowView } from './amounts-row-view';
import { inject } from 'inversify';
import { symbols } from '../../constants/ioc-symbols';

export class AmountsView extends PIXI.Container {
    constructor(@inject(symbols.amountsRowViewFactory) createAmountsRowViews: () => AmountsRowView) {
        super();
        this.y = 50;
        this.x = -175;

        for (let x = 0; x < 3; x++) {
            const row: AmountsRowView = createAmountsRowViews();
            row.y = x * 100;
            this.addChild(row);
        }
    }
}
