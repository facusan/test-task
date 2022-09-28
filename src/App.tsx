import styled from "styled-components";
import MainScreen from "./containers/MainScreen";
import AppState from "./context/background/AppState";

const AppWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  min-height: 800px;
`;

const App = () => {
  return (
    <AppState>
      <AppWrapper>
        <MainScreen></MainScreen>
      </AppWrapper>
    </AppState>
  );
};

export default App;
