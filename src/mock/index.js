import { Server } from "miragejs";

export default function startMockServer() {
  if (window.server) {
    window.server.shutdown();
  }

  window.server = new Server({
    routes() {
      this.post("/api/mode", (_, req) => {
        try {
          const { mode } = JSON.parse(req.requestBody);
          return mode === "test" || mode === "production"
            ? "Accepted"
            : "Bad request";
        } catch (e) {
          return e;
        }
      });
    },
  });
}
