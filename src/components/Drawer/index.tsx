import React, { useImperativeHandle, useState } from "react";

import { Link } from "react-router-dom";
import { SwipeableDrawer } from "@mui/material";

import pageRoutes, { PageRoute } from "../../constants/pagesRoutes";

interface DrawerProps {}

export interface DrawerHandle {
  toggleDrawer: (isOpen: boolean) => void;
}

function DrawerItem(pageRoute: PageRoute) {
  return (
    <Link to={pageRoute.path}>
      <pageRoute.Icon />
      <span>{pageRoute.name}</span>
    </Link>
  );
}

function Drawer(props: DrawerProps, ref: React.Ref<DrawerHandle>) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDrawer(isOpen: boolean) {
    setIsOpen(isOpen);
  }

  useImperativeHandle(ref, () => ({
    toggleDrawer,
  }));

  return (
    <React.Fragment key="DrawerMenu">
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onOpen={() => toggleDrawer(true)}
        onClose={() => toggleDrawer(false)}
      >
        {pageRoutes.map(DrawerItem)}
      </SwipeableDrawer>
    </React.Fragment>
  );
}

export default React.forwardRef<DrawerHandle, DrawerProps>(Drawer);
