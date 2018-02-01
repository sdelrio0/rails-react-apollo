import React from "react";
import Reboot from "material-ui/Reboot";
import { MuiThemeProvider } from "material-ui/styles";

import muiTheme from "../theme";
import App from "./App";

class Root extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Reboot />
        <App />
      </MuiThemeProvider>
    );
  }
}

export default Root;
