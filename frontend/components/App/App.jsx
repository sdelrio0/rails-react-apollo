import React from "react";
import Reboot from "material-ui/Reboot";
import styled, { injectGlobal } from "styled-components";

import NavBar from "./NavBar";
import Queries from "./Queries";

// eslint-disable-next-line
injectGlobal`
  html, body {
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }
`;

const Content = styled.div`
  padding: 1em;
`;

const App = () => (
  <main>
    <Reboot />
    <NavBar />
    <Content>
      <Queries />
    </Content>
  </main>
);

export default App;
