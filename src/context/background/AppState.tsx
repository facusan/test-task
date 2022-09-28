import React, { useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import Actions from "../contextActions";
import { Transaction } from "../../services/TransactionsService";
import { IAppState, initAppState } from "./IAppState";

const AppState = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initAppState);

  // Set app state
  const setState = (newState: IAppState) => {
    dispatch({
      type: Actions.SET_STATE,
      payload: newState,
    });
  };

  const setCurrentPage = (page: JSX.Element) => {
    dispatch({
      type: Actions.SET_CURRENT_PAGE,
      payload: page,
    });
  };

  const addTransaction = (transaction: Transaction) => {
    dispatch({
      type: Actions.SET_TRANSACTIONS,
      payload: [transaction],
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        addTransaction,
        setCurrentPage,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
