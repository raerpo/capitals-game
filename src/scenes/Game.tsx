import * as React from "react";
import styled from "styled-components";

interface gameProps {
  colors: [string, string];
  capital: string;
  rightCountry: string;
  wrongCountry: string;
}

const GameWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Country = styled.div`
  background-color: ${props => (props.color ? props.color : "white")};
`;

const Game = (props: gameProps) => {
  const { colors, capital, rightCountry, wrongCountry } = props;
  return (
    <GameWrapper>
      <Country color={colors[0]}>{rightCountry}</Country>
      <Country color={colors[1]}>{wrongCountry}</Country>
    </GameWrapper>
  );
};

export default Game;
