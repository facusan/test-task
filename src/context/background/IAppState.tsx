import { Transaction } from "../../services/TransactionsService";

export interface IAppState {
  transactions: Array<Transaction>;
  publicAddress: string;
  accountBalance: number;
  ethPrice: number;
}

export const initAppState: IAppState = {
  transactions: [],
  publicAddress: "0xb701FdCc9Db05d5AD0d7B6aAbb42DBf09ec28Ad0",
  accountBalance: 3.405,
  ethPrice: 1700,
};
