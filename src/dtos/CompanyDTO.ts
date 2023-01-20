import GenericDTO, { GenericAttributes } from "./GenericDTO";

export interface CompanyAttributes extends GenericAttributes {
  fantasy_name: string;
  company_name: string;
}

export default class CompanyDTO extends GenericDTO<CompanyAttributes> {
  private fantasy_name: string;
  private company_name: string;

  constructor(attributes: CompanyAttributes) {
    super({ id: attributes.id });
    this.fantasy_name = attributes.fantasy_name;
    this.company_name = attributes.company_name;
  }

  public toRaw(): CompanyAttributes {
    return { 
    	id: super.id, 
			fantasy_name: this.fantasy_name,
			company_name: this.company_name,
		};
  }

  public getfantasy_name(): string {
    return this.fantasy_name;
  }
}
