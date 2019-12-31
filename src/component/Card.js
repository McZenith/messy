import React from "react";
import { Box, Image } from "grommet";
import Focus from "../assets/f-icon-1.png";
import { DescriptionCard } from ".";

const Card = props => {
  const { head, details } = props;
  return (
    <Box
      width="20%"
      height="80%"
      direction="column"
      alignSelf="center"
      style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", transition: "0.3s" }}
    >
      <Box width="60px" margin={{ bottom: "0px" }}>
        <Image src={Focus} />
      </Box>
      <DescriptionCard
        head={head}
        details={details}
        textAlign="left"
        headAlign="center"
        fill
        margin={{ top: "-100px" }}
      />
    </Box>
  );
};

export default Card;
