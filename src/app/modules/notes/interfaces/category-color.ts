export interface CategoryColorAttrs {
  id: number;
  name: string;
  light: string;
  dark: string;
}

export class CategoryColor {
  id: number;
  name: string;
  light: string;
  dark: string;

  constructor(attrs: CategoryColorAttrs) {
    this.id = attrs.id;
    this.name = attrs.name;
    this.light = attrs.light;
    this.dark = attrs.dark;
  }
}
