import { Tag } from './tag';
import { Category } from './category';

export interface NoteAttrs {
  id: number;
  title: string;
  text: string;
  data: string;
  isFavorite: boolean;
  category?: Category;
  tags?: Tag[];
}

export class Note {
  id = Math.floor(Math.random() * 1000);
  title: string;
  text: string;
  data = new Date().toLocaleDateString();
  isFavorite = false;
  category?: Category;
  tags?: Tag[];

  constructor(title: string, text: string, category?: Category, tags?: Tag[]) {
    this.title = title;
    this.text = text;
    this.category = category;
    this.tags = tags;
  }
}
