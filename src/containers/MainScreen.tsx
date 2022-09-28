import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import AppContext from "../context/background/AppContext";
const ScreenWrapper = styled.div`
  display: flex;
  width: 500px;
  margin: 10px;
`;
export default function MainScreen() {
  const context = useContext(AppContext);
  useEffect(() => {
    console.log("effect", context);
  }, [context]);
  return <ScreenWrapper>{context.state.currentPage}</ScreenWrapper>;
}
