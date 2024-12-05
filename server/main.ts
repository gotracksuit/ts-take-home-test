import * as oak from "@oak/oak";

import { Port } from "./parsers.ts";

const env = {
  port: Port.parse(Deno.env.get("SERVER_PORT")),
};

const router = new oak.Router();

router.get("/_health", (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = "OK";
});

const app = new oak.Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(env);
console.log(`Started server on port ${env.port}`);
