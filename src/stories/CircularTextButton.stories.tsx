import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CircularTextButton from "../components/CircularTextButton/CircularTextButton";
import { HiArrowNarrowUp } from "react-icons/hi";

export default {
  title: "Example/CircularTextButton",
  component: CircularTextButton,
} as ComponentMeta<typeof CircularTextButton>;

const Template: ComponentStory<typeof CircularTextButton> = (args) => (
  <CircularTextButton {...args} />
);

export const Button = Template.bind({});
Button.args = {
  onClick: () => {},
  icon: <HiArrowNarrowUp />,
  text: "Send",
};
