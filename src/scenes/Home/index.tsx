import * as React from "react";
import Button from '../../components/button';

import { HomeWrapper, H1 } from './styles';

interface homeProps {
  handleStartPlaying: () => void
}

const Home = (props: homeProps) => {
  return (
    <HomeWrapper>
      <H1>Do you know the world's capitals?</H1>
      <Button text="prove it" onClick={props.handleStartPlaying} />
    </HomeWrapper>
  );
};

export default Home;
