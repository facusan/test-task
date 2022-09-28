import { useContext } from "react";
import styled from "styled-components";
import AccountCard from "../components/AccountCard/AccountCard";
import AccountHeader from "../components/AccountHeader/AccountHeader";
import TransactionList from "../components/TransactionList/TransactionList";
import AppContext from "../context/background/AppContext";
import { Transaction } from "../services/TransactionsService";
import SendModal from "./SendModal";

const transactions: Transaction[] = [
  {
    id: 1,
    to: "#123",
    from: "#456",
    value: 1100,
    date: new Date(),
  },
  {
    id: 1,
    to: "#123",
    from: "#456",
    value: 1100,
    date: new Date(),
  },
  {
    id: 1,
    to: "#123",
    from: "#456",
    value: 1100,
    date: new Date(),
  },
];

const HomeWrapper = styled.div`
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const HomeBody = styled.div`
  padding: 20px;
`;
export default function Home() {
  const context = useContext(AppContext);
  const sendEth = () => {
    context.setState({
      ...context.state,
      currentPage: <SendModal></SendModal>,
    });
  };
  return (
    <HomeWrapper>
      <HomeBody>
        <AccountHeader
          accountAddress="#1234567890"
          accountImg="avatar.png"
          accountName="Account1"
        ></AccountHeader>
        <AccountCard
          accountValue={123}
          price={1200}
          sendEth={sendEth}
        ></AccountCard>
        <TransactionList transactions={transactions}></TransactionList>
      </HomeBody>
    </HomeWrapper>
  );
}
