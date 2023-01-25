import React from "react";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface DefaultFormProps {
  children: JSX.Element;
  onConfirm(): void;
}

export default function DefaultForm({ children, onConfirm }: DefaultFormProps) {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onConfirm();
    goBack();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        {children}
        <Button variant="contained" onClick={goBack}>
          Cancelar
        </Button>
        <Button variant="contained" type="submit">
          Confirmar
        </Button>
      </form>
    </div>
  );
}
