export interface CategoryAttrs {
  id: number;
  name: string;
  color: string;
}

export class Category {
  id: number;
  name: string;
  color: string;

  constructor(attrs: CategoryAttrs) {
    this.id = attrs.id;
    this.name = attrs.name;
    this.color = attrs.color;
  }
}
