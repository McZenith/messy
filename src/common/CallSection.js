import React from "react";
import { Box } from "grommet";
import { DescriptionCard, Btn } from "../component";
import { Amazon } from "grommet-icons";

const card = {
  head: "Download Kubool Today!",
  details: `Kubool is easy to use, <5MB in size, and fun to play with! Simply download the app and get started with Kubool now. After you download the app, easily create your account and share the profile link with friends to get going.
    Receive anonymous messages from friends online!`,
  head2: "Available",
  details2: "on App store"
};
const CallSection = () => {
  const { head, details, head2, details2 } = card;
  return (
    <Box
      height="80vh"
      fill="horizontal"
      justify="center"
      align="center"
      background="brand"
    >
      <Box fill justify="center" align="center" flex width="60%">
        <DescriptionCard head={head} details={details} width="53%" />
        <Box direction="row" justify="between" align="center">
          <Btn>
            <Amazon /> <DescriptionCard head={head2} details={details2} />{" "}
          </Btn>
          <Box>
            <Btn>
              <Amazon /> <DescriptionCard head={head2} details={details2} />{" "}
            </Btn>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CallSection;
