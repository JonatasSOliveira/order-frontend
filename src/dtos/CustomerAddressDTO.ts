import GenericDTO, { GenericAttributes } from "./GenericDTO";

export interface CustomerAddressAttributes extends GenericAttributes {
  street: string;
  number?: string;
  complement?: string;
  reference_point?: string;
  cityId?: number;
  customerId?: number;
  neighborhoodId?: number;
}

export default class CustomerAddressDTO extends GenericDTO<CustomerAddressAttributes> {
  private street: string;
  private number?: string;
  private complement?: string;
  private referencePoint?: string;
  private cityId?: number;
  private customerId?: number;
  private neighborhoodId?: number;

  constructor(attributes: CustomerAddressAttributes) {
    super({ id: attributes.id });
    this.street = attributes.street;
    this.number = attributes.number;
    this.complement = attributes.complement;
    this.referencePoint = attributes.reference_point;
  }

  public toRaw(): CustomerAddressAttributes {
    return {
      id: super.id,
      street: this.street,
      number: this.number,
      complement: this.complement,
      reference_point: this.referencePoint,
      cityId: this.cityId,
      customerId: this.customerId,
      neighborhoodId: this.neighborhoodId,
    };
  }
}
