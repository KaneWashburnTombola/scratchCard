import { injectable } from "inversify";

export interface IAmountsGridLayout {
    layout: IAmountsLayout;
}

export interface IAmountsLayout {
    container: IPosition;
    gridView: IGridLayout;
}

export interface IGridLayout {
    x: number;
    y:number;
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
}


@injectable()
export class AmountsGridLayout {
    public readonly layout = {
        container: {
            x: 1000,
            y: 250
        },
        gridView: {
            x: -175,
            y: 50,
            rowView: {
                symbolConfig: {
                    numberOfSymbols: 3,
                    positions: [50, 175, 300],
                    size: 75
                }
            }
        }
        
    }
}
