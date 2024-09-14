
export type InfoRow = {
    id?: number,
    title: string,
    description?: string,
    imageURL?: string
}

export type InfoList = InfoRow[];

export enum MarvelDataType {
    WITH_IMAGE = "WITH_IMAGE",
    SIMPLE = "SIMPLE"
}

export type OnClickCallbackFn = (id: number | undefined) => void;
