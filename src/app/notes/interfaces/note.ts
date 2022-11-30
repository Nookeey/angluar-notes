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
  id = Math.floor(Math.random() * 1000);
  title: string;
  text: string;
  data = new Date().toLocaleDateString();
  favorite = false;
  categoryId: number;
  tagsIds: number[];

  constructor(
    title: string,
    text: string,
    categoryId: number,
    tagsIds: number[]
  ) {
    this.title = title;
    this.text = text;
    this.categoryId = categoryId || 0;
    this.tagsIds = tagsIds || [];
  }
}
