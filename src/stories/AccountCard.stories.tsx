import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AccountCard from "../components/AccountCard/AccountCard";

export default {
  title: "Example/AccountCard",
  component: AccountCard,
} as ComponentMeta<typeof AccountCard>;

const Template: ComponentStory<typeof AccountCard> = (args) => (
  <AccountCard {...args} />
);

export const Card = Template.bind({});
Card.args = {
  price: 1700,
  accountValue: 1.332,
};
