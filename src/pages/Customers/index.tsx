import React from "react";
import DataListContainer from "../../components/DataListContainer";
import CustomerDTO from "../../dtos/CustomerDTO";

export default function Customers() {
  async function getCustomers(): Promise<CustomerDTO[]> {
    return [];
  }

  function openCustomerForm() {}

  return (
    <DataListContainer<CustomerDTO>
      title="Clientes"
      loadData={getCustomers}
      onPressNew={openCustomerForm}
      buttonLabel="Novo Cliente"
      displayedAttribute="name"
    />
  );
}
