import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function apiHandler(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  return {
    body: new Date().toISOString(),
  };
}

app.http("postapis", {
  methods: ["POST"],
  route: "postapis/{*segments}",
  authLevel: "anonymous",
  handler: apiHandler,
});
