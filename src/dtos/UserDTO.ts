import GenericDTO, { GenericAttributes } from "./GenericDTO";

export interface UserAttributes extends GenericAttributes {
  name: string;
  login: string;
  password?: string;
}

export default class UserDTO extends GenericDTO<UserAttributes> {
  private name: string;
  private login: string;
  private password?: string;

  constructor(attributes: UserAttributes) {
    super({ id: attributes.id });

    if (attributes.password) this.password = attributes.password;

    this.name = attributes.name;
    this.login = attributes.login;
  }

  public toRaw(): UserAttributes {
    return { 
    	id: super.id, 
			name: this.name,
			login: this.login,
			password: this.password,
		};
  }

  public getName(): string {
    return this.name;
  }
}
