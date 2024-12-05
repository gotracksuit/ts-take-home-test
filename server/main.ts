import * as oak from "@oak/oak";
import { Database } from "@db/sqlite";
import * as path from "@std/path";

import { Port } from "./parsers.ts";
import listInsights from "./operations/list-insights.ts";

console.log("Loading configuration");

const env = {
  port: Port.parse(Deno.env.get("SERVER_PORT")),
};

const dbFilePath = path.resolve("tmp", "db.sqlite3");

console.log(`Opening SQLite database at ${dbFilePath}`);

await Deno.mkdir(path.dirname(dbFilePath), { recursive: true });
const dbConnection = new Database(dbFilePath);

console.log("Initialising server");

const router = new oak.Router();

router.get("/_health", (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = "OK";
});

router.get("/insights", async (ctx) => {
  const result = await listInsights({ dbConnection });
  ctx.response.body = result;
  ctx.response.body = 200;
});

router.get("/insights/create", (ctx) => {
  // TODO
});

router.get("/insights/delete", (ctx) => {
  // TODO
});

const app = new oak.Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(env);
console.log(`Started server on port ${env.port}`);
