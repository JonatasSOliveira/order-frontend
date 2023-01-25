import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

import Customers from "../pages/Customers";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import PaymentMethods from "../pages/PaymentMethods";
import PaymentMethodForm from "../pages/PaymentMethodForm";

export interface PageRoute {
  path: string;
  Element(): JSX.Element;
  name: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  notDisplayInDrawer?: boolean;
}

const pageRoutes: PageRoute[] = [
  {
    path: "/",
    Element: Home,
    name: "Início",
    Icon: HomeIcon,
  },
  {
    path: "/customers",
    Element: Customers,
    name: "Clientes",
    Icon: GroupIcon,
  },
  {
    path: "/payment-methods",
    Element: PaymentMethods,
    name: "Formas de Pagamento",
    Icon: LocalAtmIcon,
  },
  {
    path: "/payment-methods/form",
    Element: PaymentMethodForm,
    name: "Forma de Pagamento",
    Icon: LocalAtmIcon,
    notDisplayInDrawer: true,
  },
  {
    path: "/orders",
    Element: Orders,
    name: "Pedidos",
    Icon: ReceiptLongIcon,
  },
];

export default pageRoutes;
