import React, { useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import Actions from "../contextActions";
import {
  Transaction,
  TransactionsService,
} from "../../services/TransactionsService";
import { IAppState, initAppState } from "./IAppState";
import defaults from "../../utils/constants";

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

  const addTransaction = (transaction: Transaction[]) => {
    dispatch({
      type: Actions.SET_TRANSACTIONS,
      payload: transaction,
    });
  };
  const transactionService = new TransactionsService({
    transactions: defaults.pastTransactions,
  });
  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        addTransaction,
        setCurrentPage,
        transactionService,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
