export class Recipe{
  public name: string;
  public description: string;
  public imagePath: string;

  // tslint:disable-next-line:ban-types
  constructor(name: string, desc: string, imgPath: string ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
  }
}
