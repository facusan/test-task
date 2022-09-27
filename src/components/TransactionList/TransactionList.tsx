import styled from "styled-components";
import { Transaction } from "../../services/TransactionsService";
import TransactionListItem from "./TransaciontionListItem";

const ListItemWrapper = styled.div`
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
`;

interface TransactionListProps {
  transactions: Transaction[];
}
export default function TransactionList({
  transactions,
}: TransactionListProps) {
  return (
    <>
      {transactions.map((t, i, array) =>
        i !== array.length - 1 ? (
          <ListItemWrapper key={i}>
            <TransactionListItem key={i} {...t}></TransactionListItem>
          </ListItemWrapper>
        ) : (
          <div key={i}>
            <TransactionListItem key={i} {...t}></TransactionListItem>
          </div>
        )
      )}
    </>
  );
}
