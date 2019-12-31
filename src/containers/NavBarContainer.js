import React from "react";
import { NavBar } from "../common";
import { Box } from "grommet";

const NavBarContainer = () => {
  return (
    <Box
      fill="horizontal"
      height="11vh"
      background="brand"
      align="center"
      style={{ position: "sticky", top: "0px" }}
      elevation="small"
    >
      <NavBar />
    </Box>
  );
};

export default NavBarContainer;
