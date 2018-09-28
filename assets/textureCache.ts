export interface IResources {
    [index: string]: PIXI.loaders.Resource;
}

export let textureCache: IResources;

export function setTextureCache(newTextures: IResources): void {
    textureCache = newTextures;
}
