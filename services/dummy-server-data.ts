export interface IInitResponse {
    win: boolean,
    prize: number;
    symbolsToMatch: number[],
    symbols: number[];
    bonusSymbols: number[];
    playedEveryDay?: boolean;
}

export interface IVerifyResponse {
    canPlay: boolean;
}

export const initResponse: IInitResponse = {
    win: false,
    prize: 0,
    symbolsToMatch: [ 4, 7, 10, 15, 1],
    symbols: [5, 7, 10, 9, 1, 6, 10, 15, 14, 12, 11, 1, 4, 5, 9],
    bonusSymbols: [1, 2, 3, 4, 5, 6, 7, 8, 9]
};

export const canPlay: IVerifyResponse = {
    canPlay: true
}