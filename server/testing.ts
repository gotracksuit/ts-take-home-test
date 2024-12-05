import { Database } from "@db/sqlite";
import * as insightsTable from "$tables/insights.ts";
import { HasDbConnection } from "./shared.ts";
import { afterAll, beforeAll } from "@std/testing/bdd";

type Fixture = HasDbConnection & {
  insights: {
    insert(insights: insightsTable.Insert[]): void;
    selectAll(): insightsTable.Row[];
  };
};

export const withDB = <R>(fn: (fixture: Fixture) => R): R => {
  const dbConnection = new Database(":memory:");

  beforeAll(() => {
    dbConnection.exec(insightsTable.createTable);
  });

  afterAll(() => dbConnection.close());

  return fn({
    dbConnection,
    insights: {
      selectAll() {
        return dbConnection.sql<insightsTable.Row>`SELECT * FROM insights`;
      },
      insert(insights) {
        for (const item of insights) {
          dbConnection.exec(insightsTable.insertStatement(item));
        }
      },
    },
  });
};
