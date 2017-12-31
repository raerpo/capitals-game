import * as React from "react";
import * as ReactDOM from "react-dom";
import { injectGlobal } from 'styled-components';

import Home from './scenes/Home';

import { data } from "./data/capitalsData";

injectGlobal`
  body {
    margin: 0px;
    padding: 0px;
    font-size: 16px;
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
