import { expect } from "@std/expect";
import { describe, it } from "@std/testing/bdd";
import { render } from "../../testing.ts";
import { Button } from "./button.tsx";

describe("header", () => {
  it("renders", () => {
    const { getByText } = render(<Button label="Test" />);
    expect(getByText("Test")).toBeTruthy();
  });
});
