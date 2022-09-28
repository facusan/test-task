import { Button } from "../Button/Button";
import { GrFormClose } from "react-icons/gr";
import {
  BodyWrapper,
  CloseIconWrapper,
  FooterWrapper,
  HeaderWrapper,
  ModalWrapper,
} from "./Modal.styles";

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
  const onNext = () => {
    next();
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
        <Button color={"primary"} size={"small"} onClick={onNext}>
          Next
        </Button>
      </FooterWrapper>
    </ModalWrapper>
  );
}
