import { Container, decorate, injectable, interfaces } from 'inversify';
import { ISymbolSprite, SymbolSprite } from '../game/symbols-grid/symbols-sprite'
import { symbols } from '../constants/ioc-symbols';
import { SymbolsRowView } from "../game/symbols-grid/symbol-row-view";
import { AmountsRowView } from "../game/amounts-grid/amounts-row-view";
import { SymbolsToMatchView } from "../game/symbol-match/symbols-match-view";
import { SymbolsView } from "../game/symbols-grid/symbol-grid-view";
import { AmountsView } from "../game/amounts-grid/amounts-grid-view";

let container = new Container();
decorate(injectable(), PIXI.utils.EventEmitter);
container.bind<ISymbolSprite>(symbols.symbolSprite).to(SymbolSprite);
container.bind<SymbolsRowView>(SymbolsRowView).toSelf();
container.bind<interfaces.Factory<SymbolsRowView>>(symbols.symbolsRowViewFactory).toAutoFactory<SymbolsRowView>(SymbolsRowView);
container.bind<AmountsRowView>(AmountsRowView).toSelf();
container.bind<interfaces.Factory<AmountsRowView>>(symbols.amountsRowViewFactory).toAutoFactory<AmountsRowView>(AmountsRowView);
container.bind<SymbolsToMatchView>(SymbolsToMatchView).toSelf();
container.bind<SymbolsView>(SymbolsView).toSelf();
container.bind<AmountsView>(AmountsView).toSelf();

export default container;
