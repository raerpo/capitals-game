import * as React from "react";
import {
  Country,
  GameWrapper,
  Score,
  Capital,
  CountriesWrapper,
  GithubLink
} from "./styles";

interface gameProps {
  colors: [string, string];
  capital: string;
  rightCountry: string;
  wrongCountry: string;
  score: number;
  handleRightCountrySelection: () => void;
  handleWrongCountrySelection: () => void;
}

const Game = (props: gameProps) => {
  const {
    colors,
    capital,
    rightCountry,
    wrongCountry,
    score,
    handleRightCountrySelection,
    handleWrongCountrySelection
  } = props;
  const coinFlipOrder = Math.random();
  const rightCountryComponent = (
    <Country color={colors[0]} onClick={handleRightCountrySelection}>
      <p>{rightCountry}</p>
    </Country>
  );
  const wrongCountryComponent = (
    <Country color={colors[1]} onClick={handleWrongCountrySelection}>
      <p>{wrongCountry}</p>
    </Country>
  );
  return (
    <GameWrapper>
      <Score>Score: {score}</Score>
      <Capital>
        <p>
          From which country is <br /> {capital} <br /> the capital?
        </p>
      </Capital>
      <CountriesWrapper>
        {coinFlipOrder > 0.5 ? rightCountryComponent : wrongCountryComponent}
        {coinFlipOrder > 0.5 ? wrongCountryComponent : rightCountryComponent}
      </CountriesWrapper>
      <GithubLink href="https://github.com/raerpo/capitals-game" />
    </GameWrapper>
  );
};

export default Game;
