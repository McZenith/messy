import React from "react";
import { Box, Heading, Paragraph } from "grommet";

const DescriptionCard = props => {
  return (
    <Box
      width={props.width}
      fill="vertical"
      align="center"
      justify="center"
      margin={props.margin || { top: "-1.2em" }}
    >
      <Heading textAlign={props.headAlign || "center"} level="2" responsive>
        {props.head}
      </Heading>
      <Paragraph
        textAlign={props.textAlign || "center"}
        fill
        margin={{ top: "-1em" }}
        size="small"
        family="Roboto"
        responsive
      >
        {props.details}
      </Paragraph>
    </Box>
  );
};

export default DescriptionCard;
