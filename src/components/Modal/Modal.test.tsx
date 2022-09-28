import renderer from "react-test-renderer";
import Modal from "./Modal";
import SimpleModal from "./SimpleModal";

it("renders Modal correctly", () => {
  const component = renderer.create(
    <Modal cancel={() => {}} close={() => {}} next={() => {}}>
      <label>Modal body</label>
    </Modal>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders SimpleModal correctly", () => {
  const component = renderer.create(
    <SimpleModal click={() => {}} clickLabel="click">
      <label>Simple Modal body</label>
    </SimpleModal>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
