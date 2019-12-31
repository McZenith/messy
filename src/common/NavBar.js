import React from "react";
import { Box, Image, ResponsiveContext, Text } from "grommet";
// import { NavLink } from "react-router-dom";
import { Menu } from "grommet-icons";
import Logo from "../assets/logo.png";

const data = [
  { name: "HOME" },
  { name: "DOWNLOAD" },
  { name: "GE STARTED" },
  { name: "CONTACT" }
];

const MapNav = (theData = data) =>
  theData.map(elem => (
    <Box key={elem.name}>
      <Text size="xsmall"> {elem.name} </Text>
    </Box>
  ));

const toggleNav = () => (
  <ResponsiveContext.Consumer>
    {size =>
      size === "small" ? (
        <Menu />
      ) : (
        <Box direction="row" justify="evenly" flex fill="horizontal">
          {" "}
          {MapNav()}
        </Box>
      )
    }
  </ResponsiveContext.Consumer>
);

const NavBar = () => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          width="85%"
          fill="vertical"
          align="center"
          justify="between"
          direction="row"
        >
          <Box onClick={() => console.log("Hello!")}>
            <Image src={Logo} />
          </Box>
          <Box width={size === "small" ? null : "25em"}>{toggleNav()}</Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default NavBar;
