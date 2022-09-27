import styled from "styled-components";

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color?: "primary" | "secondary";
  disabled?: boolean;
  size?: "small" | "large";
};

export const Button = styled.button<ButtonProps>`
  background: ${(props) => (props.color === "primary" ? "#167EFF" : "white")};
  color: ${(props) => (props.color === "primary" ? "white" : "black")};
  border-color: ${(props) => (props.color === "primary" ? "#167EFF" : "black")};
  width: ${(props) => (props.size === "small" ? "200px" : "300px")};
  padding: 20px;
  border-radius: 6px;
  margin: 10px;
  font-weight: bold;
  font-family: sans-serif;
  font-size: large;
`;
