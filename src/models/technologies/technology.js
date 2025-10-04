export class Technology {
  constructor(name, type) {
    this.validation(name,type);
    this.name = name;
    this.type = type;
  }

  validation(name,type) {
if (!name) {
      throw new Error("Invalid technology name");
    }
    if (!type) {
      throw new Error("Invalid technology type");
    }
  }
}