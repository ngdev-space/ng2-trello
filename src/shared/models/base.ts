export interface ListI<T> {
    id: number;
    name: string;
    items: Array<T>;
}

export interface CardI {
    id: number;
    title: string;
    description: string;
    tags: Array<Tag>;
}

export interface TextCardI<T> {
    elements: Array<T>
}

export class Board implements ListI<Column> {
    constructor(
        public id: number,
        public name: string,
		public items: Array<Column>
    ) {}
}

export class Column implements ListI<CardI> {
    constructor(
        public id: number,
        public name: string,
        public items: Array<CardI>
    ) {}
}

export class TextCard implements CardI, TextCardI<TextElement> {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public tags: Array<Tag>,
        public elements: Array<TextElement>
    ) {}
}

export class TextElement {
    constructor(
        public name: string
    ) {}
}

export class Tag {
    constructor(
        public name: string
    ) {}
}

