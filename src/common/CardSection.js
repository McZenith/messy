import React from "react";
import { Box } from "grommet";
import { Card } from "../component";

const data = [
  {
    head: "Anonymity",
    details:
      "Our Platform ensures your privacy so that you stay anonymous everytime you send someone a secret message. You are anonymous until you ever choose to reveal your identity."
  },
  {
    head: "Safe & Secure",
    details:
      "Safety of our users using this anonymous messaging platform is very important for us. We have got reporting systems so that you can report anything that you do not like to see."
  },
  {
    head: "24/7 Support",
    details:
      "If there is anything that you need help with related to our anonymous messaging and feedback platform, We are always here for you. 24 hours a day and 7 days a week."
  },
  {
    head: "Easy 2 Use",
    details:
      "We are constantly working on Kubool as a platform to make it as user friendly as possible. As of now you can just download our app, fill in your username & pass to get started."
  }
];

const displayCard = () =>
  data.map(content => (
    <Card head={content.head} details={content.details} key={content.head} />
  ));

const CardSection = props => {
  return (
    <Box
      height="80vh"
      fill="horizontal"
      background="white"
      direction="row"
      width="85%"
      align="center"
      justify="around"
    >
      {displayCard()}
    </Box>
  );
};

export default CardSection;
