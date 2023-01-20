import React from "react";
import GenericDTO, { GenericAttributes } from "../../dtos/GenericDTO";
import Header from "../Header";

interface DataListContainerProps<DTO extends GenericDTO<GenericAttributes>> {
  title: string;
  loadData(): Promise<Array<DTO>>;
  buttonLabel: string;
  onPressNew(): void;
}

export default function DataListContainer<
  DTO extends GenericDTO<GenericAttributes>
>({ title }: DataListContainerProps<DTO>) {
  return (
    <div>
      <Header title={title} />
    </div>
  );
}
