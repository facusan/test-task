import styled from "styled-components";
import Input from "../components/Input/Input";
import Modal from "../components/Modal/Modal";

const SendModalWrapper = styled.div`
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 100%;
`;
export default function SendModal() {
  return (
    <SendModalWrapper>
      <Modal next={() => {}} cancel={() => {}}>
        <Input
          value=""
          label="Add Recipient"
          onChange={() => {}}
          placeholder="Enter Public Address"
        ></Input>
      </Modal>
    </SendModalWrapper>
  );
}
