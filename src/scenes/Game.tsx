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
  cursor: pointer;
  overflow: hidden;
  &:hover {
    & > p:before {
      transform: scale(10);
    }
  }
  & > p {
    text-shadow: 0 3px 0 rgba(1,1,1,0.1);
    font-size: 5rem;
    margin: 0px auto;
    text-align: center;
    margin-top: 30vh;
    max-width: 60%;
    position: relative;
    &:before {
      content: '';
      width: 2em;
      height: 2em;
      background-color: rgba(255,255,255,0.2);
      border-radius: 50%;
      position: absolute;
      left: calc(50% - 1em);
      top: -.5em;
      transition: all .3s ease-in-out;
    }
  }
`;

const Capital = styled.div`
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  margin-left: calc(50% - 10vw);
  text-align: center;
  margin-top: calc(50vh - 10vw);
  & > p {
    text-shadow: 0 3px 0 rgba(1,1,1,0.1);
    margin: 0px;
    margin-top: 6rem;
    padding: 1em;
    font-size: 1.5em;
    color: black;
  }
`;

const Game = (props: gameProps) => {
  const { colors, capital, rightCountry, wrongCountry } = props;
  return (
    <GameWrapper>
      <Capital><p>From which country is <br /> {capital} <br /> the capital?</p></Capital>
      <CountriesWrapper>
        <Country color={colors[0]}><p>{rightCountry}</p></Country>
        <Country color={colors[1]}><p>{wrongCountry}</p></Country>
      </CountriesWrapper>
    </GameWrapper>
  );
};

export default Game;
