export interface GenericAttributes {
  id?: number;
  deleted_at?: Date;
}

export default abstract class GenericDTO<Attributes extends GenericAttributes> {
  protected id?: number;

  constructor(attributes?: GenericAttributes) {
    if (!attributes) return;
    this.id = attributes.id;
  }

  public abstract toRaw(): Attributes;

  public getId(): number {
    return this.id || NaN;
  }
}
