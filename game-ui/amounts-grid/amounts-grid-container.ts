import * as PIXI from 'pixi.js';
import { AmountsGridTitle } from './amounts-grid-title';
import { inject, injectable } from 'inversify';
import { symbols } from '../../constants/ioc-symbols';
import { IAmountsGridLayout, IAmountsLayout } from './amounts-grid-layout';
import { IAmountsView } from './amounts-grid-view';
import { TweenLite } from 'gsap';

@injectable()
export class AmountsGridContainer extends PIXI.Container {
    private layout: IAmountsLayout
    constructor(
        @inject(symbols.amountsGridLayout) private amountsGridLayout: IAmountsGridLayout,
        @inject(symbols.amountsView) private amountsView: IAmountsView
    ) {
        super();
        this.layout = this.amountsGridLayout.layout;
        this.x = this.layout.container.offScreenX;
        this.y = this.layout.container.y;
        TweenLite.to(this, 1, { x: this.layout.container.onScreenX});

        this.setupContents();
    }

    private setupContents(): void {
        this.amountsView.setupValues( this.layout.gridView);
        this.addChild(new AmountsGridTitle(this.layout.title), this.amountsView);
    }
}
