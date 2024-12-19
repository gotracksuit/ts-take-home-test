import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";
import { screen } from "@testing-library/react";
import { render } from "../../testing.ts";
import { Modal } from "./modal";

describe("Modal", () => {
  it("should open and close", () => {
    render(
      <Modal open={false} onClose={() => undefined}>
        Closed modal
      </Modal>
    );
    expect(screen.queryByText("Closed modal")).toBeFalsy();

    render(
      <Modal open={true} onClose={() => undefined}>
        <div>Open modal</div>
      </Modal>
    );
    expect(screen.getByText("Open modal")).toBeTruthy();
  });
});
