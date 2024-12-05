import { Insight } from "$models/insight.ts";
import { HasDbConnection } from "../shared.ts";

type Input = HasDbConnection;

export default async (_input: Input): Promise<Insight[]> => {
  console.log("Listing insights");

  const result = await Promise.resolve([]);

  console.log("Retrieved insights successfully: ", result);
  return result;
};
