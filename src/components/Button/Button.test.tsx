import renderer from "react-test-renderer";
import { Button } from "./Button";

it("renders primary Button correctly", () => {
  const component = renderer.create(
    <Button onClick={() => {}} color={"primary"}>
      Primary
    </Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders secondary Button correctly", () => {
  const component = renderer.create(
    <Button onClick={() => {}} color={"secondary"}>
      Secondary
    </Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders small Button correctly", () => {
  const component = renderer.create(
    <Button onClick={() => {}} color={"secondary"} size="small">
      Small
    </Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders large Button correctly", () => {
  const component = renderer.create(
    <Button onClick={() => {}} color={"secondary"} size="large">
      Small
    </Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
