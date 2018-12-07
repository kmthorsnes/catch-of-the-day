import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import { truncate } from "fs";

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood marked"/>
        </div>
        <Order />
        <Inventory />

      </div>
    );
  }
}

export default App;
