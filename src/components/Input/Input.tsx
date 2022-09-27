import styled from "styled-components";

const StyledInput = styled.input`
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

const InputWrapper = styled.div`
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-bottom-color: black;
`;
interface InputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  label: string;
  placeholder: string;
}
export default function Input({
  value,
  label,
  onChange,
  placeholder,
}: InputProps) {
  return (
    <InputWrapper>
      <label
        style={{
          fontFamily: "sans-serif",
          fontWeight: "bold",
          color: "lightslategrey",
        }}
      >
        {label}
      </label>
      <StyledInput
        value={value}
        onChange={onChange}
        type={"text"}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
}
