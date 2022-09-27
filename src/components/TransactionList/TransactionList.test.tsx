import renderer from "react-test-renderer";
import { Transaction } from "../../services/TransactionsService";
import TransaciontionList from "./TransactionList";

it("renders TransaciontionList correctly", () => {
  let transactions: Transaction[] = [
    {
      date: new Date(),
      from: "#123",
      id: 1,
      to: "#456",
      value: 100,
    },
    {
      date: new Date(),
      from: "#123",
      id: 2,
      to: "#456",
      value: 100,
    },
    {
      date: new Date(),
      from: "#123",
      id: 3,
      to: "#456",
      value: 100,
    },
  ];
  const component = renderer.create(
    <TransaciontionList transactions={transactions}></TransaciontionList>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
