import React from "react";
import { Box, Carousel, Image } from "grommet";

const ScreenShotSection = () => {
  return (
    <Box height="80vh" fill="horizontal" background="white">
      <Carousel fill controls="false">
        <Image
          fit="contain"
          src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
        />
        <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
        <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
      </Carousel>
    </Box>
  );
};

export default ScreenShotSection;
