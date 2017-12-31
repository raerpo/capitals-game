import * as React from "react";
import * as ReactDOM from "react-dom";

import { data } from "./data/capitalsData";

class App extends React.Component {
  render() {
    return data.map((country, index) => (
      <div key={index}>
        <h2>{country.country}</h2>
        <small>{country.capital}</small>
      </div>
    ));
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
