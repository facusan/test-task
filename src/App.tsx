import React from "react";
import Home from "./containers/Home";
import AppState from "./context/background/AppState";

const App = () => {
  return (
    <AppState>
      <Home />
    </AppState>
  );
};

export default App;
