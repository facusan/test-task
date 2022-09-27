import { MouseEventHandler } from "react";
import {
  Circle,
  CircularTextButtonWrapper,
  TextWrapper,
} from "./CircularTextButton.styles";

interface CircularTextButtonProps {
  icon: JSX.Element;
  text: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}
export default function CircularTextButton({
  text,
  icon,
  onClick,
}: CircularTextButtonProps) {
  return (
    <CircularTextButtonWrapper onClick={onClick}>
      <Circle>{icon}</Circle>
      <TextWrapper>{text}</TextWrapper>
    </CircularTextButtonWrapper>
  );
}
