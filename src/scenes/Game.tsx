import * as React from "react";
import styled from "styled-components";

interface gameProps {
  colors: [string, string];
  capital: string;
  rightCountry: string;
  wrongCountry: string;
}

const GameWrapper = styled.div`
  position: relative;
`;

const CountriesWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Country = styled.div`
  background-color: ${props => (props.color ? props.color : "white")};
`;

const Capital = styled.div`
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  margin-left: calc(50% - 10vw);
  text-align: center;
  color: black;
  margin-top: calc(50vh - 10vw);
`;

const Game = (props: gameProps) => {
  const { colors, capital, rightCountry, wrongCountry } = props;
  return (
    <GameWrapper>
      <Capital>{capital}</Capital>
      <CountriesWrapper>
        <Country color={colors[0]}>{rightCountry}</Country>
        <Country color={colors[1]}>{wrongCountry}</Country>
      </CountriesWrapper>
    </GameWrapper>
  );
};

export default Game;
