import PaymentMethodDTO from "../../dtos/PaymentMethodDTO";
import GenericRoutes from "./GenericRoutes";

export default class PaymentMethodRoutes extends GenericRoutes<PaymentMethodDTO> {
  protected getApiVersion(): string {
    return "v1";
  }

  protected getSingularRouteName(): string {
    return "payment-method";
  }

  protected getPluralRouteName(): string {
    return "payment-methods";
  }
}
