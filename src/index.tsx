import * as React from "react";
import * as ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import Home from "./scenes/Home";
import Game from "./scenes/Game";

import { data as countries } from "./data/capitalsData";
import { defaultColorText } from "./constants/colors";

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

class App extends React.Component {
  state = {
    playing: false,
    capital: "",
    rightCountry: "",
    wrongCountry: ""
  };
  // Change between home page and the game
  handleStartPlaying = () => {
    const { capital, rightCountry, wrongCountry } = this.getNewRound();
    this.setState({
      playing: true,
      capital,
      rightCountry,
      wrongCountry
    });
  };
  // Change the capital, rightCountry and wrongCountry in the state
  getNewRound = () => {
    let randomIndex: number = Math.floor(Math.random() * countries.length);
    const capital = countries[randomIndex].capital;
    const rightCountry = countries[randomIndex].country;
    // New country
    // @TODO: Make sure that the new country is different than the right country
    randomIndex = Math.floor(Math.random() * countries.length);
    const wrongCountry = countries[randomIndex].country;
    return {
      capital,
      rightCountry,
      wrongCountry
    };
  };
  render() {
    const { playing, capital, rightCountry, wrongCountry } = this.state;
    return (
      <div>
        {this.state.playing ? (
          <Game
            colors={["yellow", "green"]}
            capital={capital}
            rightCountry={rightCountry}
            wrongCountry={wrongCountry}
          />
        ) : (
          <Home handleStartPlaying={this.handleStartPlaying} />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
