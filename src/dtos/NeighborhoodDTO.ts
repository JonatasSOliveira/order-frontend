import GenericDTO, { GenericAttributes } from "./GenericDTO";

export interface NeighborhoodAttributes extends GenericAttributes {
  name: string;
}

export default class NeighborhoodDTO extends GenericDTO<NeighborhoodAttributes> {
  private name: string;

  constructor(attributes: NeighborhoodAttributes) {
    super({ id: attributes.id });
    this.name = attributes.name;
  }

  public toRaw(): NeighborhoodAttributes {
    return { id: super.id, name: this.name };
  }

  public getName(): string {
    return this.name;
  }
}
