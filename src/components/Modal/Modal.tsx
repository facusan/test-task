import styled from "styled-components";
import { Button } from "../Button/Button";

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderWrapper = styled.div`
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
  padding: 40px 25px;
  font-weight: bold;
  font-family: sans-serif;
  font-size: large;
`;
const BodyWrapper = styled.div`
  padding: 40px 25px;
`;
const FooterWrapper = styled.div`
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: lightgray;
  padding: 20px 25px;
  font-weight: bold;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
`;
interface ModalProps {
  next: Function;
  cancel: Function;
  children?: React.ReactNode;
}
export default function Modal({ next, cancel, children }: ModalProps) {
  return (
    <ModalWrapper>
      <HeaderWrapper>{"Send Ether"}</HeaderWrapper>
      <BodyWrapper>{children}</BodyWrapper>
      <FooterWrapper>
        <Button color={"secondary"} size={"small"}>
          Cancel
        </Button>
        <Button color={"primary"} size={"small"}>
          Next
        </Button>
      </FooterWrapper>
    </ModalWrapper>
  );
}
