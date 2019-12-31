import React from "react";
import { Box } from "grommet";
import { DescriptionCard } from "../component";

const card = {
  head: "Why Use Kabool ?",
  details:
    "Our Anonymous Messaging App comes along with many great features. Here we are going to list some of them. Have a look below."
};
const DescriptionSection = props => {
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
        <DescriptionCard head={head} details={details} width="50%"/>
      </Box>
    </Box>
  );
};

export default DescriptionSection;
