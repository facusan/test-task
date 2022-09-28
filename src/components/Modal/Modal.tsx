import styled from "styled-components";
import { Button } from "../Button/Button";
import { GrFormClose } from "react-icons/gr";

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const HeaderWrapper = styled.div`
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
  padding: 40px 25px;
  font-weight: bold;
  font-family: sans-serif;
  font-size: large;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BodyWrapper = styled.div`
  padding: 40px 25px;
  height: 100%;
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
  align-items: center;
`;
const CloseIconWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
interface ModalProps {
  next: Function;
  cancel: Function;
  close: Function;
  children?: React.ReactNode;
}

export default function Modal({ next, cancel, close, children }: ModalProps) {
  const onCancelClick = () => {
    cancel();
  };
  const onCloseClick = () => {
    close();
  };
  return (
    <ModalWrapper>
      <HeaderWrapper>
        <label>{"Send Ether"}</label>
        <CloseIconWrapper onClick={onCloseClick}>
          <GrFormClose size={"25px"} />
        </CloseIconWrapper>
      </HeaderWrapper>
      <BodyWrapper>{children}</BodyWrapper>
      <FooterWrapper>
        <Button color={"secondary"} size={"small"} onClick={onCancelClick}>
          Cancel
        </Button>
        <Button color={"primary"} size={"small"}>
          Next
        </Button>
      </FooterWrapper>
    </ModalWrapper>
  );
}
