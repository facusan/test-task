import { Transaction } from "../services/TransactionsService";
import { IAppState } from "./background/IAppState";

enum Actions {
  SET_TRANSACTIONS = "SET_TRANSACTIONS",
  SET_STATE = "SET_STATE",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
}

export interface SetTransactionAction {
  type: Actions.SET_TRANSACTIONS;
  payload: Transaction[];
}

export interface SetStateAction {
  type: Actions.SET_STATE;
  payload: Partial<IAppState>;
}

export interface SetCurrentPageAction {
  type: Actions.SET_CURRENT_PAGE;
  payload: JSX.Element;
}

export default Actions;
