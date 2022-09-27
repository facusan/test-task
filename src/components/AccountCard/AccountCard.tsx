import styled from "styled-components";
import { HiArrowNarrowUp } from "react-icons/hi";
const AccountCardWrapper = styled.div`
  background-color: #eaf3fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
`;

const AccountValueWrapper = styled.div`
  margin: 10px;
  font-size: xx-large;
  font-weight: bold;
  font-family: sans-serif;
`;

const AccountFiatValueWrapper = styled.div`
  font-size: large;
  color: lightslategrey;
  font-family: sans-serif;
`;

interface AccountCardProps {
  price: number;
  accountValue: number;
}
export default function AccountCard({ price, accountValue }: AccountCardProps) {
  const GetFiatValue = () => price * accountValue;
  return (
    <AccountCardWrapper>
      <AccountValueWrapper>{accountValue} ETH</AccountValueWrapper>
      <AccountFiatValueWrapper>
        ${GetFiatValue().toFixed(2)} USD
      </AccountFiatValueWrapper>
      <div>
        <HiArrowNarrowUp /> Send
      </div>
    </AccountCardWrapper>
  );
}
