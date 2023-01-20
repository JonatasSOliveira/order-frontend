import React, { useRef } from "react";

import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer, { DrawerHandle } from "../Drawer";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const drawerRef = useRef<DrawerHandle>(null);

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => drawerRef.current?.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer ref={drawerRef} />
    </>
  );
}
