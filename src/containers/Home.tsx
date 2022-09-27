import styled from "styled-components";
import AccountCard from "../components/AccountCard/AccountCard";
import AccountHeader from "../components/AccountHeader/AccountHeader";
import TransactionList from "../components/TransactionList/TransactionList";
import { Transaction } from "../services/TransactionsService";

const transactions: Transaction[] = [
  {
    id: 1,
    to: "#123",
    from: "#456",
    value: 1100,
    date: new Date(),
  },
  {
    id: 2,
    to: "#123",
    from: "#556",
    value: 1400,
    date: new Date(),
  },
  {
    id: 3,
    to: "#123",
    from: "#556",
    value: 1400,
    date: new Date(),
  },
];

const HomeWrapper = styled.div`
  padding: 20px;
`;
export default function Home() {
  return (
    <HomeWrapper>
      <AccountHeader
        accountAddress="#1234567890"
        accountImg="avatar.png"
        accountName="Account1"
      ></AccountHeader>
      <AccountCard accountValue={123} price={1200}></AccountCard>
      <TransactionList transactions={transactions}></TransactionList>
    </HomeWrapper>
  );
}
