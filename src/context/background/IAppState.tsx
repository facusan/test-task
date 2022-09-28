import Home from "../../containers/Home";
import { Transaction } from "../../services/TransactionsService";
import defaults from "../../utils/constants";

export interface IAppState {
  currentPage: JSX.Element;
  transactions: Array<Transaction>;
  publicAddress: string;
  accountBalance: number;
  ethPrice: number;
  accountName: string;
  accountAvatar: string;
}

export const initAppState: IAppState = {
  currentPage: <Home />,
  transactions: [],
  publicAddress: defaults.publicAddress,
  accountBalance: defaults.accountBalance,
  ethPrice: defaults.ethPrice,
  accountName: defaults.accountName,
  accountAvatar: defaults.accountAvatar,
};
