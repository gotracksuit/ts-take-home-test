import jsdom from "global-jsdom";
import { afterEach } from "@std/testing/bdd";
import { cleanup } from "@testing-library/react";

jsdom();
afterEach(cleanup);

export * from "@testing-library/react";
