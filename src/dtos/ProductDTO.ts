import GenericDTO from "./GenericDTO";

export default interface ProductDTO extends GenericDTO {
  name: string;
  description?: string;
  price: number;
}
