import React from "react";
import styled from "styled-components";
import Home from "./containers/Home";
import SendModal from "./containers/SendModal";
import AppState from "./context/background/AppState";

const AppWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  min-height: 800px;
`;
const ScreenWrapper = styled.div`
  display: flex;
  width: 500px;
  margin: 10px;
`;
const App = () => {
  return (
    <AppState>
      <AppWrapper>
        <ScreenWrapper>
          <Home />
        </ScreenWrapper>
        <ScreenWrapper>
          <SendModal />
        </ScreenWrapper>
      </AppWrapper>
    </AppState>
  );
};

export default App;
