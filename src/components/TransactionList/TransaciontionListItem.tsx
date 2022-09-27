import { Transaction } from "../../services/TransactionsService";
import {
  AvatarItemWrapper,
  DataWrapper,
  DescriptionWrapper,
  TitleWrapper,
  TransactionListItemWrapper,
} from "./TransactionListItem.styles";

export default function TransactionListItem({ date, value }: Transaction) {
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
  return (
    <TransactionListItemWrapper>
      <AvatarItemWrapper>
        <img style={{ height: "30px" }} alt="ether" src="ether.png"></img>
      </AvatarItemWrapper>
      <DataWrapper>
        <TitleWrapper>
          <div>{"Sent Ether"}</div>
          <div>{`-${value} ETH`}</div>
        </TitleWrapper>
        <DescriptionWrapper>
          <div>{getDateTimeFormat(date)}</div>
          <div>{`-$${value} USD`}</div>
        </DescriptionWrapper>
      </DataWrapper>
    </TransactionListItemWrapper>
  );
}
