import * as React from "react";
import * as ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import Home from "./scenes/Home";
import Game from "./scenes/Game";

import { getRandomItems } from './utils/random';

import { data as countries } from "./data/capitalsData";
import { defaultColorText, capitalsColors } from "./constants/colors";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  body {
    margin: 0px;
    padding: 0px;
    font-size: 16px;
    color: ${defaultColorText};
    font-family: 'Roboto', sans-serif;
  }
`;

interface countryData {
  country: string,
  capital: string
}

class App extends React.Component {
  state = {
    playing: false,
    capital: "",
    rightCountry: "",
    wrongCountry: "",
    score: 0
  };
  // Change between home page and the game
  handleStartPlaying = () => {
    const { capital, rightCountry, wrongCountry } = this.getNewRound();
    this.setState({
      playing: true,
      capital,
      rightCountry: rightCountry.country,
      wrongCountry: wrongCountry.country
    });
  };
  // Change the capital, rightCountry and wrongCountry in the state
  getNewRound = () => {
    const [ rightCountry, wrongCountry ] = getRandomItems(countries, 2) as [countryData, countryData];
    const capital = rightCountry.capital;
    return {
      capital,
      rightCountry,
      wrongCountry
    };
  };
  render() {
    const { playing, capital, rightCountry, wrongCountry, score } = this.state;
    const backgroundColors = getRandomItems(capitalsColors, 2) as [string, string];
    return (
      <div>
        {this.state.playing ? (
          <Game
            colors={backgroundColors}
            capital={capital}
            rightCountry={rightCountry}
            wrongCountry={wrongCountry}
            score={score}
          />
        ) : (
          <Home handleStartPlaying={this.handleStartPlaying} />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
