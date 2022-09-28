import Actions, {
  SetCurrentPageAction,
  SetStateAction,
  SetTransactionAction,
} from "../contextActions";
import { IAppState } from "./IAppState";

type AppAction = SetTransactionAction | SetStateAction | SetCurrentPageAction;

const appReducer = (state: IAppState, action: AppAction): IAppState => {
  switch (action.type) {
    case Actions.SET_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case Actions.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
