import styled from "styled-components";

export const TransactionListItemWrapper = styled.div`
  display: flex;
  padding: 15px 0px;
`;
export const AvatarItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  height: 50px;
  width: 54px;
  border-style: solid;
  border-width: 1px;
  border-color: lightgray;
`;
export const DataWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-family: sans-serif;
  font-weight: bold;
  padding-bottom: 5px;
`;
export const DescriptionWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-family: sans-serif;
  color: lightslategrey;
  font-size: small;
  font-weight: bolder;
`;
