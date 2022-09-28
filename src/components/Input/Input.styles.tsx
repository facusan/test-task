import styled from "styled-components";

export const StyledInput = styled.input`
  font-family: sans-serif;
  width: 100%;
  border: none;
  margin-top: 10px;
  padding: 20px 0px;
  ::placeholder {
    color: lightslategrey;
    font-size: large;
  }
  &:focus {
    outline: none;
  }
`;

export const InputWrapper = styled.div`
  margin: 0px 0px 20px 0px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-bottom-color: black;
`;
