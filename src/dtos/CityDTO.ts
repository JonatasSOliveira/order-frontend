import GenericDTO, { GenericAttributes } from "./GenericDTO";

export interface CityAttributes extends GenericAttributes {
  name: string;
}

export default class CityDTO extends GenericDTO<CityAttributes> {
  private name: string;

  constructor(attributes: CityAttributes) {
    super({ id: attributes.id });
    this.name = attributes.name;
  }

  public toRaw(): CityAttributes {
    return { id: super.id, name: this.name };
  }

  public getName(): string {
    return this.name;
  }
}
