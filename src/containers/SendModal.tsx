import styled from "styled-components";
import Input from "../components/Input/Input";
import Modal from "../components/Modal/Modal";
import { useContext } from "react";
import Home from "./Home";
import AppContext from "../context/background/AppContext";
import { useState, ChangeEvent } from "react";
import SendResultModal from "./SendResultModal";
import { Transaction } from "../services/TransactionsService";
const SendModalWrapper = styled.div`
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 100%;
`;

export default function SendModal() {
  const context = useContext(AppContext);
  const returnHome = () => {
    context.setCurrentPage(<Home></Home>);
  };
  const [recipient, setRecipient] = useState("");
  const onChangeRecipient = (e: ChangeEvent<HTMLInputElement>) =>
    setRecipient(e.target.value);

  const [amount, setAmount] = useState("");
  const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) =>
    setAmount(e.target.value);

  const goToSendResult = () => {
    let transaction: Transaction = {
      id: Math.floor(Math.random() * 100),
      date: new Date(),
      from: context.state.publicAddress,
      to: recipient,
      value: Number(amount),
    };
    context.transactionService
      .addTransaction(transaction)
      .then(() => {
        context.setCurrentPage(
          <SendResultModal success={true}></SendResultModal>
        );
      })
      .catch(() => {
        context.setCurrentPage(
          <SendResultModal success={false}></SendResultModal>
        );
      });
  };

  return (
    <SendModalWrapper>
      <Modal next={goToSendResult} cancel={returnHome} close={returnHome}>
        <Input
          value={recipient}
          label="Add Recipient"
          onChange={onChangeRecipient}
          placeholder="Enter Public Address"
          type="text"
        ></Input>
        <Input
          value={amount}
          label="Add Amount"
          onChange={onChangeAmount}
          placeholder="Enter amount"
          type="number"
        ></Input>
      </Modal>
    </SendModalWrapper>
  );
}
