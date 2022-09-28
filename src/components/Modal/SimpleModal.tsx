import { Button } from "../Button/Button";
import { BodyWrapper, FooterWrapper, ModalWrapper } from "./Modal.styles";

interface SimpleModalProps {
  clickLabel: string;
  click: Function;
  children?: React.ReactNode;
}

export default function SimpleModal({
  click,
  clickLabel,
  children,
}: SimpleModalProps) {
  const onClick = () => {
    click();
  };
  return (
    <ModalWrapper>
      <BodyWrapper>{children}</BodyWrapper>
      <FooterWrapper>
        <Button color={"secondary"} onClick={onClick}>
          {clickLabel}
        </Button>
      </FooterWrapper>
    </ModalWrapper>
  );
}
