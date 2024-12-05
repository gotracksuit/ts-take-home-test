import { beforeAll, describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

import listInsights from "./list-insights.ts";
import { withDB } from "../testing.ts";
import { Insight } from "$models/insight.ts";

describe("listing insights in the database", () => {
  describe("nothing in the DB", () => {
    withDB((fixture) => {
      let result: Insight[];

      beforeAll(async () => {
        result = await listInsights(fixture);
      });

      it("returns empty result", () => {
        expect(result).toEqual([]);
      });
    });
  });

  describe("populated DB", () => {
    withDB((fixture) => {
      const insights: Insight[] = [];

      let result: Insight[];

      beforeAll(async () => {
        await fixture.insights.insert(insights);
        result = await listInsights(fixture);
      });

      it("returns all insights in the DB", () => {
        expect(result).toEqual(insights);
      });
    });
  });
});
