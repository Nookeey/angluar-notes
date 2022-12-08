export interface TagAttrs {
  id?: number;
  name: string;
}

export class Tag {
  id = Math.floor(Math.random() * 1000);
  name: string;

  constructor(name: string, id?: number) {
    this.name = name;
    this.id = id || this.id;
  }
}
