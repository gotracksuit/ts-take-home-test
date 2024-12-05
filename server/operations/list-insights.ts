import { Insight } from "$models/insight.ts";
import { HasDbConnection } from "../shared.ts";
import { Row } from "$tables/insights.ts";

type Input = HasDbConnection;

export default (input: Input): Insight[] => {
  console.log("Listing insights");

  const rows = input.dbConnection.sql<Row>`SELECT * FROM insights`;

  const result: Insight[] = rows.map((row) => ({
    ...row,
    createdAt: new Date(row.createdAt),
  }));

  console.log("Retrieved insights successfully: ", result);
  return result;
};
