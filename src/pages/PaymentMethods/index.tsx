import React from "react";
import OrderApi from "../../apis/OrderApi";
import DataListContainer from "../../components/DataListContainer";

import PaymentMethodDTO from "../../dtos/PaymentMethodDTO";

const orderApi = new OrderApi();

export default function PaymentForms() {
  async function getPaymentForms(): Promise<PaymentMethodDTO[]> {
    const res = await orderApi.paymentMethod.listAll();

    if (res.status !== 200) {
      return [];
    }

    return res.data;
  }

  return (
    <DataListContainer<PaymentMethodDTO>
      title="Formas de Pagamento"
      buttonLabel="Nova Forma de Pagamento"
      loadData={getPaymentForms}
      displayedAttribute="name"
      onPressNew={() => null}
    />
  );
}
