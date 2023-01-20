import GenericDTO, { GenericAttributes } from "./GenericDTO";

export interface CustomerAttributes extends GenericAttributes {
  name: string;
  federal_document?: string;
}

export default class CustomerDTO extends GenericDTO<CustomerAttributes> {
  private name: string;
  private federalDocument?: string;

  constructor(attributes: CustomerAttributes) {
    super({ id: attributes.id });
    this.name = attributes.name;
    this.federalDocument = attributes.federal_document;
  }

  public toRaw(): CustomerAttributes {
    return {
      id: super.id,
      name: this.name,
      federal_document: this.federalDocument,
    };
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setFederalDocument(federalDocument: string): void {
    this.federalDocument = federalDocument;
  }

  public getFederalDocument(): string | undefined {
    return this.federalDocument;
  }
}
