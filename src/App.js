import React, { useEffect, Fragment } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

//components
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";

const App = () => {
  useEffect(() => {
    //Init Material JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
