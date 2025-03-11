import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function apiHandler(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  const url = new URL(request.url);
  const path = url.pathname.split("/").pop().toLowerCase();

  if (path === "nocachehint" || path === "cachecontrol") {
    return { body: new Date().toISOString() };
  } else if (path === "cachecontrolwithmaxage") {
    return {
      body: new Date().toISOString(),
      headers: {
        "Cache-Control": "max-age=20",
      },
    };
  } else if (path === "cachecontrolprivatenostore") {
    return {
      body: new Date().toISOString(),
      headers: {
        "Cache-Control": "no-store, private",
      },
    };
  } else {
    return { status: 404, body: "Path " + path + "Not Found" };
  }
}

app.http("cacheControl", {
  methods: ["POST"],
  route: "cacheControl/{*segments}",
  authLevel: "anonymous",
  handler: apiHandler,
});
