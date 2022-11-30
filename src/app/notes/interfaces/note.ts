import { Category } from './category';

export interface NoteAttrs {
  id: number;
  title: string;
  text: string;
  data: string;
  favorite: boolean;
  categoryId: number;
  tagsIds: number[];
}

export class Note {
  id: number;
  title: string;
  text: string;
  data: string;
  favorite: boolean;
  categoryId: number;
  tagsIds: number[];

  constructor(attrs: NoteAttrs) {
    this.id = attrs.id;
    this.title = attrs.title;
    this.text = attrs.text;
    this.data = attrs.data;
    this.favorite = attrs.favorite;
    this.categoryId = attrs.categoryId;
    this.tagsIds = attrs.tagsIds;
  }
}
