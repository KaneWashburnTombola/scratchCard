import { injectable } from "inversify";
import { IPosition, ITitleLayout, ISymbolConfig } from "../amounts-grid/amounts-grid-layout";

export interface ISymbolsToMatchLayout {
    layout : IMatchLayout
}

export interface IMatchLayout {
    container: IPosition;
    title: ITitleLayout;
    symbolConfig: ISymbolConfig;
}

@injectable()
export class SymbolToMatchLayout implements ISymbolsToMatchLayout {
    public readonly layout = {
        container: {
            x: 625,
            y: 100
        },
        title: {
            text: 'This is Symbol Match Title Text',
            x: 0
        }, 
        symbolConfig: {
            numberOfSymbols: 5,
            positions: [ 50, 150, 250, 350, 450 ],
            size: 75,
            tokenSize: 90
        }
    }
}