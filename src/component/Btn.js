import React from "react";
import { Box } from "grommet";
const Btn = props => {
  return (
    <Box
      width={props.width}
      height={props.height}
      background="white"
      alignSelf="start"
      align="center"
      justify="center"
      round="5px"
      margin={{ top: "1.5em" }}
      direction="row"
    >
      {props.children}
    </Box>
  );
};

export default Btn;
