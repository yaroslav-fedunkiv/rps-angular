export class Publisher{
  public title: string;
  public description: string;
  public image: string;
  public price: number;


  constructor(title: string, description: string, image: string, price: number) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.price = price;
  }
}
