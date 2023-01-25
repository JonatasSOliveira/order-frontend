import GenericDTO from "./GenericDTO";

export default interface UserDTO extends GenericDTO {
  name?: string;
  login?: string;
  password?: string;
}
