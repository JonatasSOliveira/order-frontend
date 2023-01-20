import GenericDTO, { GenericAttributes } from "./GenericDTO";

export interface PaymentMethodAttributes extends GenericAttributes {
  name: string;
}

export default class PaymentMethodDTO extends GenericDTO<PaymentMethodAttributes> {
  private name: string;

  constructor(attributes: PaymentMethodAttributes) {
    super({ id: attributes.id });
    this.name = attributes.name;
  }

  public toRaw(): PaymentMethodAttributes {
    if (!this.isValid()) throw new Error("invalid PaymentMethod!");

    return { id: super.id, name: this.name.trim() };
  }

  public isValid(): boolean {
    const isValid: boolean = this.name.trim() != "";
    return isValid;
  }

  public getName() {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}
