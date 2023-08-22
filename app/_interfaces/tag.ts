export interface Tag {
    id: string;
    tag: string;
    color: string;
}

export interface ITagCheckBox {
    isChecked: boolean
}

export type TagCheckBox = Tag & ITagCheckBox;
