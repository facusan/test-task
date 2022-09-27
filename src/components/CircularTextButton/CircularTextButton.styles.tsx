import styled from "styled-components";

export const CircularTextButtonWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
export const Circle = styled.div`
  border-radius: 25px;
  height: 50px;
  width: 50px;
  background-color: #167eff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-large;
  margin: 10px;
`;
export const TextWrapper = styled.div`
  font-family: sans-serif;
  font-weight: bold;
`;
