import GenericDTO from "./GenericDTO";

export default interface CustomerAddressDTO extends GenericDTO {
  street?: string;
  number?: string;
  complement?: string;
  reference_point?: string;
  cityId?: number;
  customerId?: number;
  neighborhoodId?: number;
}
