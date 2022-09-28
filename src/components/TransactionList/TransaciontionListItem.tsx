import { Transaction } from "../../services/TransactionsService";
import {
  AvatarItemWrapper,
  DataWrapper,
  DescriptionWrapper,
  TitleWrapper,
  TransactionListItemWrapper,
} from "./TransactionListItem.styles";
import { useContext } from "react";
import AppContext from "../../context/background/AppContext";

export default function TransactionListItem({ date, value, to }: Transaction) {
  const getDateTimeFormat = (d: Date) =>
    d.getDate() +
    "-" +
    (d.getMonth() + 1) +
    "-" +
    d.getFullYear() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes();

  const context = useContext(AppContext);

  const getSentOrReceived = () => {
    return context.state.publicAddress === to ? "Received" : "Sent";
  };

  const getSign = () => {
    return context.state.publicAddress === to ? "" : "-";
  };

  const getFiatValue = () => context.state.ethPrice * value;

  return (
    <TransactionListItemWrapper>
      <AvatarItemWrapper>
        <img style={{ height: "30px" }} alt="ether" src="ether.png"></img>
      </AvatarItemWrapper>
      <DataWrapper>
        <TitleWrapper>
          <div>{`${getSentOrReceived()} Ether`}</div>
          <div>{`${getSign()}${value} ETH`}</div>
        </TitleWrapper>
        <DescriptionWrapper>
          <div>{getDateTimeFormat(date)}</div>
          <div>{`${getSign()}$${getFiatValue()} USD`}</div>
        </DescriptionWrapper>
      </DataWrapper>
    </TransactionListItemWrapper>
  );
}
