import React from "react";
import Modal from "./components/Modal/Modal";
import Home from "./containers/Home";
import AppState from "./context/background/AppState";

const App = () => {
  return (
    <AppState>
      <Home />
      <Modal next={() => {}} cancel={() => {}}>
        <input style={{ width: "100%" }} type={"text"}></input>
      </Modal>
    </AppState>
  );
};

export default App;
