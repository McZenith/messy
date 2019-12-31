import React from "react";
import { Box, Carousel } from "grommet";

const SliderBox = () => {
  return (
    <Box fill="vertical" width="85%" background="white">
      <Carousel fill="vertical" controls="false"></Carousel>
    </Box>
  );
};

export default SliderBox;
