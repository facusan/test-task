import renderer from "react-test-renderer";
import CircularTextButton from "./CircularTextButton";
import { HiArrowNarrowUp } from "react-icons/hi";

it("renders CircularTextButton correctly", () => {
  const component = renderer.create(
    <CircularTextButton
      onClick={() => {}}
      icon={<HiArrowNarrowUp />}
      text="Send"
    ></CircularTextButton>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
