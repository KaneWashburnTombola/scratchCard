import { canPlay, IInitResponse, initResponse, IVerifyResponse } from './dummy-server-data';

export interface IGameServer {
    init: () => Promise<IInitResponse>;
    verify: () => Promise<IVerifyResponse>;
}

export const dummyServer: IGameServer = {
    verify: () => {
        return new Promise((resolve) => {
            resolve(canPlay);
        });
    },
    init: () => {
        return new Promise((resolve) => {
            resolve(initResponse);
        });
    }
}