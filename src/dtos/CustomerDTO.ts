import GenericDTO from "./GenericDTO";

export default interface CustomerDTO extends GenericDTO {
  name?: string;
  federal_document?: string;
}
