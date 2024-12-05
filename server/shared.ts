import { Database } from "@db/sqlite";

export type HasDbConnection = {
  dbConnection: Database;
};
