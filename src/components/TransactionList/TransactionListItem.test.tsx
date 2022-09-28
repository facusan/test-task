import renderer from "react-test-renderer";
import { Transaction } from "../../services/TransactionsService";
import TransaciontionListItem from "./TransaciontionListItem";

it("renders TransaciontionListItem correctly", () => {
  let transaction: Transaction = {
    date: new Date(0),
    from: "#123",
    id: 1,
    to: "#456",
    value: 100,
  };
  const component = renderer.create(
    <TransaciontionListItem {...transaction}></TransaciontionListItem>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
