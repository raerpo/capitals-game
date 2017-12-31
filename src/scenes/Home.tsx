import * as React from "react";
import styled from "styled-components";

import { backgroundHome } from "../constants/colors";
import Button from '../components/button';

const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${backgroundHome};
  text-align: center;
  padding-top: 5em;
`;

const H1 = styled.h1`
  margin: 0px;
`

const Home = () => {
  return (
    <HomeWrapper>
      <H1>Do you know the world's capitals?</H1>
      <Button text="prove it" />
    </HomeWrapper>
  );
};

export default Home;
