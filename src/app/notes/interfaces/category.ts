import { CategoryColor } from './category-color';

export interface CategoryAttrs {
  id: number;
  name: string;
  color: CategoryColor;
}

export class Category {
  id = Math.floor(Math.random() * 1000);
  name: string;
  color: CategoryColor;

  constructor(name: string, color: CategoryColor) {
    this.name = name;
    this.color = color;
  }
}
