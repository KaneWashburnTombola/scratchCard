import { Container, decorate, injectable, interfaces } from 'inversify';
import { ISymbolSprite, SymbolSprite } from '../game-ui/symbols-grid/symbols-sprite'
import { symbols } from '../constants/ioc-symbols';
import { SymbolsRowView } from "../game-ui/symbols-grid/symbol-row-view";
import { AmountsRowView } from "../game-ui/amounts-grid/amounts-row-view";
import { SymbolsToMatchView, ISymbolsToMatchView } from "../game-ui/symbol-match/symbols-match-view";
import { SymbolsView, ISymbolsView } from "../game-ui/symbols-grid/symbol-grid-view";
import { AmountsView } from "../game-ui/amounts-grid/amounts-grid-view";
import { IAmountsGridLayout, AmountsGridLayout } from '../game-ui/amounts-grid/amounts-grid-layout';
import { AmountsGridContainer } from '../game-ui/amounts-grid/amounts-grid-container';
import { ISymbolsToMatchLayout, SymbolToMatchLayout } from '../game-ui/symbol-match/symbol-match-layout';
import { SymbolMatchContainer } from '../game-ui/symbol-match/symbols-match-container';
import { SymbolsGridContainer } from '../game-ui/symbols-grid/symbols-grid-container';
import { ISymbolsGridLayout, SymbolsGridLayout } from '../game-ui/symbols-grid/sybols-grid-layout';

let container = new Container();
decorate(injectable(), PIXI.utils.EventEmitter);

container.bind<ISymbolSprite>(symbols.symbolSprite).to(SymbolSprite);

container.bind<SymbolsRowView>(SymbolsRowView).toSelf();
container.bind<interfaces.Factory<SymbolsRowView>>(symbols.symbolsRowViewFactory).toAutoFactory<SymbolsRowView>(SymbolsRowView);
container.bind<ISymbolsView>(symbols.symbolsView).to(SymbolsView);
container.bind<SymbolsGridContainer>(SymbolsGridContainer).toSelf();
container.bind<ISymbolsGridLayout>(symbols.symbolsGridLayout).to(SymbolsGridLayout);

container.bind<AmountsRowView>(AmountsRowView).toSelf();
container.bind<interfaces.Factory<AmountsRowView>>(symbols.amountsRowViewFactory).toAutoFactory<AmountsRowView>(AmountsRowView);
container.bind<IAmountsGridLayout>(symbols.amountsGridLayout).to(AmountsGridLayout);
container.bind<AmountsGridContainer>(AmountsGridContainer).toSelf();
container.bind<AmountsView>(symbols.amountsView).to(AmountsView);


container.bind<SymbolsToMatchView>(SymbolsToMatchView).toSelf();
container.bind<SymbolMatchContainer>(SymbolMatchContainer).toSelf();
container.bind<ISymbolsToMatchLayout>(symbols.symbolsToMatchLayout).to(SymbolToMatchLayout);
container.bind<ISymbolsToMatchView>(symbols.symbolsToMatchView).to(SymbolsToMatchView);

export default container;
