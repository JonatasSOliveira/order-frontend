import GenericDTO, { GenericAttributes } from "./GenericDTO";

export interface ProductAttributes extends GenericAttributes {
  name: string;
  description?: string;
  price: number;
}

export default class ProductDTO extends GenericDTO<ProductAttributes> {
  private name: string;
  private description?: string;
  private price: number;

  constructor(attributes: ProductAttributes) {
    super({ id: attributes.id });
    this.name = attributes.name;
    this.description = attributes.description;
    this.price = attributes.price;
  }

  public toRaw(): ProductAttributes {
    return {
      id: super.id,
      name: this.name,
      description: this.description,
      price: this.price,
    };
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getDescription(): string | null {
    return this.description || null;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public getPrice(): number {
    return this.price;
  }
}
