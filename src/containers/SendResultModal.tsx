import styled from "styled-components";
import { useContext } from "react";
import Home from "./Home";
import AppContext from "../context/background/AppContext";
import SimpleModal from "../components/Modal/SimpleModal";
const SendModalWrapper = styled.div`
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 100%;
`;
const ResultBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const ResultTitle = styled.label`
  font-weight: bold;
  font-size: x-large;
`;
const ResultBody = styled.label`
  font-size: large;
  font-weight: bold;
  color: lightslategrey;
`;
const StyledLink = styled.a`
  font-size: large;
  font-weight: bold;
  color: #167eff;
`;
const SuccessResult = () => {
  return (
    <ResultBodyWrapper>
      <img alt="success" src={"send-success.png"}></img>
      <ResultTitle>Success.</ResultTitle>
      <ResultBody>You've successfully sent your funds.</ResultBody>
      <StyledLink href={"https://etherscan.io/"}>View on Etherscan</StyledLink>
    </ResultBodyWrapper>
  );
};
const ErrorResult = () => {
  return (
    <ResultBodyWrapper>
      <ResultTitle>Error.</ResultTitle>
      <ResultBody>There was an error. Your funds were not sent.</ResultBody>
    </ResultBodyWrapper>
  );
};

interface SendResultModalProps {
  success: boolean;
}
export default function SendResultModal({ success }: SendResultModalProps) {
  const context = useContext(AppContext);
  const returnHome = () => {
    context.setCurrentPage(<Home></Home>);
  };

  return (
    <SendModalWrapper>
      <SimpleModal click={returnHome} clickLabel={"Done"}>
        {success ? (
          <SuccessResult></SuccessResult>
        ) : (
          <ErrorResult></ErrorResult>
        )}
      </SimpleModal>
    </SendModalWrapper>
  );
}
