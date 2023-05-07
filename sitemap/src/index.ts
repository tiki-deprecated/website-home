/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    if (request.method !== "GET") {
      return Response.json(
        {
          help: "Try GET",
        },
        { status: 405, statusText: "Method Not Allowed" }
      );
    } else {
      console.log("about to fetch: " + env.HOST);
      return fetch(env.HOST, {
        method: "GET",
      });
    }
  },
};
