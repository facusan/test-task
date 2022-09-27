import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TransactionListItem from "../components/TransactionList/TransaciontionListItem";

export default {
  title: "Example/TransactionListItem",
  component: TransactionListItem,
} as ComponentMeta<typeof TransactionListItem>;

const Template: ComponentStory<typeof TransactionListItem> = (args) => (
  <TransactionListItem {...args} />
);

export const Item = Template.bind({});
Item.args = {
  id: 1,
  to: "#123",
  from: "#456",
  value: 1100,
  date: new Date(),
};
