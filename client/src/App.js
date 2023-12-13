import React, { Fragment } from "react";
import "./App.css";

//components

import InputEmployee from "./components/Inputemployee";
import ListEmployees from "./components/Listemployee";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputEmployee />
        <ListEmployees />
      </div>
    </Fragment>
  );
}

export default App;