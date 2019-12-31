import React from "react";
import { Box, Heading, ResponsiveContext, Paragraph, Image } from "grommet";
import rightImage from "../assets/right-mobile.png";
import { Btn } from "../component";

const Jumbotron = () => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          height="100vh"
          width="100vw"
          background="url(/home-banner.jpg)"
          align="center"
        >
          <Box width="85%" fill="vertical" align="center" direction="row">
            <Box width={size === "small" ? "100%" : "60%"} fill="vertical">
              <Heading
                color="white"
                level="2"
                size={size === "small" ? "29px" : "62.5px"}
                margin={{ top: "2.5em" }}
              >
                Send Secret Anonymous Messages Online
              </Heading>
              <Box width={size === "small" ? "96%" : "85%"} alignSelf="start">
                <Paragraph
                  color="white"
                  margin={size === "small" ? { top: "-1em" } : { top: "-2em" }}
                  family="Roboto"
                  fill
                  responsive
                  size="small"
                  style={{ fontWeight: "100" }}
                >
                  Kubool is an interactive anonymous messaging app with a dare
                  game. Create your Profile Link and Send it to all your
                  contacts to check what do your friends think about you. With
                  the help of Kubool, you can send and receive anonymous
                  compliments easily for free!
                </Paragraph>
              </Box>
              <Btn width="186px" height="50px">Download Now</Btn>
            </Box>
            {size === "small" ? null : (
              <Box width="40%" fill="vertical" justify="center" align="start">
                <Box
                  width="90%"
                  height="28em"
                  margin={{ top: "5em" }}
                  align="stretch"
                >
                  <Image src={rightImage} fit="contain" />
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Jumbotron;
