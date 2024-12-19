import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { cx } from "./cx.ts";

describe("cx", () => {
  it("joins strings", () => {
    expect(cx("foo", "bar")).toEqual("foo bar");
  });
  it("omits falsey values", () => {
    expect(cx("foo", undefined, null && "bar", "baz")).toEqual("foo baz");
  });
});
