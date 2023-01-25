import axios, { AxiosResponse } from "axios";
import GenericDTO from "../../dtos/GenericDTO";

export default abstract class GenericRoutes<DTO extends GenericDTO> {
  private baseUrl: string;

  protected abstract getSingularRouteName(): string;
  protected abstract getPluralRouteName(): string;
  protected abstract getApiVersion(): string;

  constructor() {
    this.baseUrl = `${
      process.env.REACT_APP_API_URL
    }/api/${this.getApiVersion()}`;
  }

  protected get singularUrl() {
    return `${this.baseUrl}/${this.getSingularRouteName()}`;
  }

  public async create(data: DTO): Promise<AxiosResponse<{ id: number }, any>> {
    return await axios.post<{ id: number }>(`${this.singularUrl}`, data);
  }

  public async update(
    id: number,
    data: DTO
  ): Promise<AxiosResponse<void, any>> {
    return await axios.put<void>(`${this.singularUrl}/${id}`, data);
  }

  public async delete(id: number): Promise<AxiosResponse<void, any>> {
    return await axios.delete<void>(`${this.singularUrl}/${id}`);
  }

  public async listAll(): Promise<AxiosResponse<DTO[], any>> {
    console.log(`${this.baseUrl}/${this.getPluralRouteName()}`);

    return await axios.get<DTO[]>(
      `${this.baseUrl}/${this.getPluralRouteName()}`
    );
  }
}
