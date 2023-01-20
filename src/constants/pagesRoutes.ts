import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

import Customers from "../pages/Customers";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import PaymentForms from "../pages/PaymentForms";

export interface PageRoute {
  path: string;
  Element(): JSX.Element;
  name: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
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
    path: "/payment-forms",
    Element: PaymentForms,
    name: "Formas de Pagamento",
    Icon: LocalAtmIcon,
  },
  {
    path: "/orders",
    Element: Orders,
    name: "Pedidos",
    Icon: ReceiptLongIcon,
  },
];

export default pageRoutes;
