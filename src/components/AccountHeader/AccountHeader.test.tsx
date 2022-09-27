import renderer from "react-test-renderer";
import AccountHeader from "./AccountHeader";

it("renders AccountHeader correctly", () => {
  const component = renderer.create(
    <AccountHeader
      accountAddress="0x3B375486d5fB0D0fdf94a0FF66092072996Bd1ab"
      accountImg="avatar.png"
      accountName="Account 1"
    ></AccountHeader>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
