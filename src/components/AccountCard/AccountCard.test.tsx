import renderer from "react-test-renderer";
import AccountCard from "./AccountCard";

it("renders AccountCard correctly", () => {
  const component = renderer.create(
    <AccountCard
      price={1700}
      accountValue={1.332}
      sendEth={() => {}}
    ></AccountCard>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
