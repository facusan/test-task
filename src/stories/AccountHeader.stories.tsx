import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AccountHeader from "../components/AccountHeader/AccountHeader";

export default {
  title: "Example/AccountHeader",
  component: AccountHeader,
} as ComponentMeta<typeof AccountHeader>;

const Template: ComponentStory<typeof AccountHeader> = (args) => (
  <AccountHeader {...args} />
);

export const Header = Template.bind({});
Header.args = {
  accountAddress: "0x3B375486d5fB0D0fdf94a0FF66092072996Bd1ab",
  accountName: "Account 1",
  accountImg: "avatar.png",
};
