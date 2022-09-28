import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
export const HeaderWrapper = styled.div`
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
export const BodyWrapper = styled.div`
  padding: 40px 25px;
  height: 100%;
`;
export const FooterWrapper = styled.div`
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
export const CloseIconWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
