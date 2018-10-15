import { injectable } from "inversify";

export interface IAmountsGridLayout {
    layout: IAmountsLayout;
}

export interface IAmountsLayout {
    container: IPosition;
    title: ITitleLayout;
    gridView: IGridLayout;
}

export interface ITitleLayout {
    text: string;
    x: number;
}

export interface IGridLayout {
    x: number;
    y:number;
    numberOfRows: number;
    rowView: {
        symbolConfig: ISymbolConfig;
    }
}

export interface IPosition {
    x: number;
    y: number;
}

export interface ISymbolConfig { 
    numberOfSymbols: number;
    positions: number[];
    size: number;
    tokenSize: number;
}


@injectable()
export class AmountsGridLayout implements IAmountsGridLayout {
    public readonly layout = {
        container: {
            x: 1000,
            y: 250
        },
        title: {
            text: 'This is Amounts Grid Title Text',
            x: 0
        },
        gridView: {
            x: -175,
            y: 50,
            numberOfRows: 3,
            rowView: {
                symbolConfig: {
                    numberOfSymbols: 3,
                    positions: [50, 175, 300],
                    size: 75,
                    tokenSize: 90
                }
            }
        }
        
    }
}
