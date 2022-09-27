import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TransactionList from "../components/TransactionList/TransactionList";

export default {
  title: "Example/TransactionList",
  component: TransactionList,
} as ComponentMeta<typeof TransactionList>;

const Template: ComponentStory<typeof TransactionList> = (args) => (
  <TransactionList {...args} />
);

export const Item = Template.bind({});
Item.args = {
  transactions: [
    {
      id: 1,
      to: "#123",
      from: "#456",
      value: 1100,
      date: new Date(),
    },
    {
      id: 2,
      to: "#123",
      from: "#556",
      value: 1400,
      date: new Date(),
    },
    {
      id: 3,
      to: "#123",
      from: "#556",
      value: 1400,
      date: new Date(),
    },
  ],
};
