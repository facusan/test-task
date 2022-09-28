import { InputWrapper, StyledInput } from "./Input.styles";

interface InputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  label: string;
  placeholder: string;
  type: string;
}
export default function Input({
  value,
  label,
  onChange,
  placeholder,
  type,
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
        type={type}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
}
