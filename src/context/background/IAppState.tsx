import Home from "../../containers/Home";
import { Transaction } from "../../services/TransactionsService";

export interface IAppState {
  currentPage: JSX.Element;
  transactions: Array<Transaction>;
  publicAddress: string;
  accountBalance: number;
  ethPrice: number;
}

export const initAppState: IAppState = {
  currentPage: <Home />,
  transactions: [],
  publicAddress: "0xb701FdCc9Db05d5AD0d7B6aAbb42DBf09ec28Ad0",
  accountBalance: 3.405,
  ethPrice: 1700,
};
