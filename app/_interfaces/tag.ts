export interface Tag {
    id: string;
    tag: string;
}

export interface ITagCheckBox {
    isChecked: boolean
}

export type TagCheckBox = Tag & ITagCheckBox;
