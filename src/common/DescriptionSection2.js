import React from "react";
import { Box } from "grommet";
import { DescriptionCard } from "../component";

const card = {
  head: "App Screenshots",
  details:
    "Out of all other Anonymous Messaging and Anonymous Feedback apps our User Interface is much easier to use. Have a quick look."
};
const DescriptionSection2 = props => {
  const { head, details } = card;
  return (
    <Box
      height="50vh"
      fill="horizontal"
      background="white"
      justify="center"
      align="center"
    >
      <Box width="90%" fill="vertical" justify="center" align="center">
        <DescriptionCard head={head} details={details} width="50%" />
      </Box>
    </Box>
  );
};

export default DescriptionSection2;
