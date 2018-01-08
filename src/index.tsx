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
    font-family: 'Roboto', sans-serif, arial;
  }
`;

interface countryData {
  country: string,
  capital: string
}

interface appState {
  playing: boolean,
  capital: string,
  rightCountry: string,
  wrongCountry: string,
  score: number
}

class App extends React.Component {
  state: appState = {
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
  handleRightCountrySelection = () => {
    const newRoundData = this.getNewRound();
    const newState: appState = {
      ...this.state,
      score: this.state.score + 1,
      capital: newRoundData.capital,
      rightCountry: newRoundData.rightCountry.country,
      wrongCountry: newRoundData.wrongCountry.country
    };
    this.setState(newState);
  }
  handleWrongCountrySelection = () => {
    // @TODO: show that the person lost in a most nicer way
    alert(`You've got ${this.state.score} points... You can do it better.`);
    // @TODO: this code is almost the same as the one in handleRightCountry method. Must be refactored!
    const newRoundData = this.getNewRound();
    const newState: appState = {
      ...this.state,
      score: 0,
      capital: newRoundData.capital,
      rightCountry: newRoundData.rightCountry.country,
      wrongCountry: newRoundData.wrongCountry.country
    };
    this.setState(newState);
  }
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
            handleRightCountrySelection={this.handleRightCountrySelection}
            handleWrongCountrySelection={this.handleWrongCountrySelection}
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
