import React, { useState, useEffect } from "react";

import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import GenericDTO from "../../dtos/GenericDTO";
import Header from "../Header";
import { Container, MainContent } from "./styles";

interface DataListCommonProps<DTO extends GenericDTO> {
  displayedAttribute: keyof DTO;
}

interface DataListContainerProps<DTO extends GenericDTO>
  extends DataListCommonProps<DTO> {
  title: string;
  loadData(): Promise<Array<DTO>>;
  buttonLabel: string;
  onPressNew(): void;
}

interface DataListItemProps<DTO extends GenericDTO>
  extends DataListCommonProps<DTO> {
  item: DTO;
}

function DataListItem<DTO extends GenericDTO>({
  item,
  displayedAttribute,
}: DataListItemProps<DTO>) {
  const displayedText = item[displayedAttribute] + "";

  return (
    <div>
      <span>{displayedText}</span>
    </div>
  );
}

export default function DataListContainer<DTO extends GenericDTO>({
  title,
  buttonLabel,
  loadData,
  displayedAttribute,
}: DataListContainerProps<DTO>) {
  const [dataList, setDataList] = useState<DTO[]>([]);

  const navigate = useNavigate();
  const location = useLocation();

  function goToForm() {
    navigate(`${location.pathname}/form`);
  }

  useEffect(() => {
    loadData().then(setDataList);
  }, []);

  return (
    <Container>
      <Header title={title} />
      <MainContent>
        {dataList.map((item) => (
          <DataListItem item={item} displayedAttribute={displayedAttribute} />
        ))}
      </MainContent>
      <Button variant="contained" onClick={goToForm}>
        {buttonLabel}
      </Button>
    </Container>
  );
}
