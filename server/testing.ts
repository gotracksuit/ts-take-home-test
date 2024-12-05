import { Insight } from "$models/insight.ts";
import { Database } from "@db/sqlite";
import { HasDbConnection } from "./shared.ts";

type Fixture = HasDbConnection & {
  insights: {
    insert(insights: Insight[]): Promise<void>;
  };
};

export const withDB = <R>(fn: (fixture: Fixture) => R): R => {
  const dbConnection = new Database(":memory:");

  return fn({
    dbConnection,
    insights: {
      insert() {
        throw new Error("not implemented");
      },
    },
  });
};
