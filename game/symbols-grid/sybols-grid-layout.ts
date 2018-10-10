import { injectable } from "inversify";
import { IPosition, ITitleLayout, ISymbolConfig } from "../amounts-grid/amounts-grid-layout";

export interface ISymbolsGridLayout {
    layout: ISymbolsLayout;
}

export interface ISymbolsLayout {
    container: IPosition;
    title: ITitleLayout;
    rows: IRowConfig;
}

export interface IRowConfig {
    x: number;
    y: number;
    numberOfRows: number;
    symbolConfig: ISymbolConfig;
}


@injectable()
export class SymbolsGridLayout implements ISymbolsGridLayout {
    public readonly layout = {
        container: {
            x: 250,
            y: 250
        },
        title: {
            text: 'This is Symbol Grid Title Text',
            x: 100
        },
        rows: {
            x: -200,
            y: 50,
            numberOfRows: 3,
            symbolConfig: {
                numberOfSymbols: 5,
                positions: [50, 175, 300, 425, 550],
                size: 75
            }
        }
    }
}
 