import React from "react";

import "../../packs/application.scss";
import NavBar from "../NavBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>Hello World</div>
      </div>
    );
  }
}

export default App;
