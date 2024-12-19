import { render } from "../../testing.ts";
import { describe, it } from "@std/testing/bdd";
import { Header, HEADER_TEXT } from "./header.tsx";
import { expect } from "@std/expect";

describe("header", () => {
  it("renders", () => {
    const { getByText } = render(<Header />);
    expect(getByText(HEADER_TEXT)).toBeTruthy();
  });
});
