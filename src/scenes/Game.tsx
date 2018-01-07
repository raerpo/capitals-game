import * as React from "react";
import styled from "styled-components";

interface gameProps {
  colors: [string, string];
  capital: string;
  rightCountry: string;
  wrongCountry: string;
  score: number;
  handleRightCountrySelection: () => void;
  handleWrongCountrySelection: () => void;
}

const GameWrapper = styled.div`
  position: relative;
`;

const CountriesWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  @media (max-width: 1024px) {
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
  }
`;

const Country = styled.div`
  background-color: ${props => (props.color ? props.color : "white")};
  cursor: pointer;
  overflow: hidden;
  &:hover {
    & > p:before {
      transform: scale(1.5);
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
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    & > p {
      margin-top: 0px;
      font-size: 3rem;
      max-width: 90%;
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
    margin: 0px;
    margin-top: 6rem;
    padding: 1em;
    font-size: 1.5em;
    color: black;
  }
  @media (max-width: 1024px) {
    border-radius: 0px;
    width: 100%;
    height: 20vh;
    margin-top: calc(50vh - 10vh);
    margin-left: 0px;
    & > p {
      margin-top: 0px;
    }
  }
`;

const Score = styled.div`
  position: absolute;
  right: 1em;
  top: 1em;
  font-size: 2em;
  @media (max-width: 1024px) { 
    right: .5em;
    top: .5em;
    font-size: 1.5em;
  }
`;

const GithubLink = styled.a`
  background: url(github-logo.png) no-repeat;
  background-size: contain;
  width: 2em;
  height: 2em;
  position: absolute;
  left: 1em;
  bottom: 1em;
  font-size: 2em;
  @media (max-width: 1024px) { 
    left: .5em;
    bottom: .5em;
    width: 1.5em;
    height: 1.5em;
  }
`

const Game = (props: gameProps) => {
  const { colors, capital, rightCountry, wrongCountry, score, handleRightCountrySelection, handleWrongCountrySelection } = props;
  const coinFlipOrder = Math.random();
  const rightCountryComponent = <Country color={colors[0]} onClick={handleRightCountrySelection}>
    <p>{rightCountry}</p>
  </Country>;
  const wrongCountryComponent = <Country color={colors[1]} onClick={handleWrongCountrySelection}>
    <p>{wrongCountry}</p>
  </Country>;
  return (
    <GameWrapper>
      <Score>Score: { score }</Score>
      <Capital><p>From which country is <br /> {capital} <br /> the capital?</p></Capital>
      <CountriesWrapper>
        {coinFlipOrder > 0.5 ? rightCountryComponent : wrongCountryComponent}
        {coinFlipOrder > 0.5 ? wrongCountryComponent : rightCountryComponent}
      </CountriesWrapper>
      <GithubLink href="https://github.com/raerpo/capitals-game" />
    </GameWrapper>
  );
};

export default Game;
