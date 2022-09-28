import { createContext } from "react";
import {
  Transaction,
  TransactionsService,
} from "../../services/TransactionsService";
import { IAppState, initAppState } from "./IAppState";

type ContextType = {
  state: IAppState;
  addTransaction: (transactions: Transaction[]) => void;
  setState: (state: IAppState) => void;
  setCurrentPage: (page: JSX.Element) => void;
  transactionService: TransactionsService;
};

const AppContext: React.Context<ContextType> = createContext<ContextType>({
  state: initAppState,
  addTransaction: () => {},
  setState: () => {},
  setCurrentPage: () => {},
  transactionService: new TransactionsService({ transactions: [] }),
});

export default AppContext;
