import { HiArrowNarrowUp } from "react-icons/hi";
import CircularTextButton from "../CircularTextButton/CircularTextButton";
import {
  AccountCardWrapper,
  AccountFiatValueWrapper,
  AccountValueWrapper,
} from "./AccountCard.styles";

interface AccountCardProps {
  price: number;
  accountValue: number;
  sendEth: Function;
}
export default function AccountCard({
  price,
  accountValue,
  sendEth,
}: AccountCardProps) {
  const GetFiatValue = () => price * accountValue;
  const onClickButton = () => {
    sendEth();
    console.log("send eth");
  };
  return (
    <AccountCardWrapper>
      <AccountValueWrapper>{accountValue} ETH</AccountValueWrapper>
      <AccountFiatValueWrapper>
        ${GetFiatValue().toFixed(2)} USD
      </AccountFiatValueWrapper>
      <div>
        <CircularTextButton
          onClick={onClickButton}
          icon={<HiArrowNarrowUp />}
          text="Send"
        ></CircularTextButton>
      </div>
    </AccountCardWrapper>
  );
}
