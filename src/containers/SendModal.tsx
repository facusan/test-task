import styled from "styled-components";
import Input from "../components/Input/Input";
import Modal from "../components/Modal/Modal";
import { useContext } from "react";
import Home from "./Home";
import AppContext from "../context/background/AppContext";
import { useState, ChangeEvent } from "react";
import SendResultModal from "./SendResultModal";
import {
  Transaction,
  TransactionsService,
} from "../services/TransactionsService";
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
      id: 1,
      date: new Date(),
      from: "",
      to: recipient,
      value: Number(amount),
    };
    context.addTransaction([transaction]);
    context.setCurrentPage(<SendResultModal success={true}></SendResultModal>);
  };

  return (
    <SendModalWrapper>
      <Modal next={goToSendResult} cancel={returnHome} close={returnHome}>
        <Input
          value={recipient}
          label="Add Recipient"
          onChange={onChangeRecipient}
          placeholder="Enter Public Address"
        ></Input>
        <Input
          value={amount}
          label="Add Amount"
          onChange={onChangeAmount}
          placeholder="Enter amount"
        ></Input>
      </Modal>
    </SendModalWrapper>
  );
}
