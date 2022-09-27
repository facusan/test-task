import {
  AccountAddressWrapper,
  AccountDataWrapper,
  AccountHeaderWrapper,
  AccountImgWrapper,
  AccountNameWrapper,
} from "./AccountHeader.styles";

interface AccountHeaderProps {
  accountName: string;
  accountAddress: string;
  accountImg: string;
}
export default function AccountHeader({
  accountAddress,
  accountName,
  accountImg,
}: AccountHeaderProps) {
  const getShortAddress = () => {
    return `${accountAddress.slice(0, 5)}...${accountAddress.slice(
      accountAddress.length - 4,
      accountAddress.length
    )}`;
  };
  return (
    <AccountHeaderWrapper>
      <AccountImgWrapper>
        <img
          style={{ width: "50px" }}
          src={accountImg}
          alt="account avatar"
        ></img>
      </AccountImgWrapper>
      <AccountDataWrapper>
        <AccountNameWrapper>{accountName}</AccountNameWrapper>
        <AccountAddressWrapper>{getShortAddress()}</AccountAddressWrapper>
      </AccountDataWrapper>
    </AccountHeaderWrapper>
  );
}
