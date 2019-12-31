import React from "react";
import { Grommet } from "grommet";
import { NavBarContainer } from "../containers";
import {
  DescriptionSection,
  // CardSection,
  ScreenShotSection,
  CallSection,
  FooterSection,
  Jumbotron
  // DescriptionSection2
} from "../common";

const Home = () => {
  return (
    <Grommet>
      <NavBarContainer />
      <Jumbotron />
      <DescriptionSection />
      <ScreenShotSection />
      <CallSection />
      <FooterSection />
    </Grommet>
  );
};

/**
 *
 *
 *<CardSection />
 *<DescriptionSection2 />
 */
export default Home;
