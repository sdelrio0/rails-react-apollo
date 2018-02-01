import React from "react";
import { injectGlobal } from "styled-components";

import NavBar from "../NavBar";

// eslint-disable-next-line
injectGlobal`
  html, body {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}`;

const App = () => (
  <div>
    <NavBar />
    <div>Hello World</div>
  </div>
);

export default App;
