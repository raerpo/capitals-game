import * as React from "react";
import * as ReactDOM from "react-dom";
import { injectGlobal } from 'styled-components';

import Home from './scenes/Home';

import { data } from "./data/capitalsData";
import { defaultColorText } from './constants/colors';

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
  render() {
    return <div>
      <Home />
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
