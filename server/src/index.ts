import { initServer } from "./app";

async function init() {
  const app = await initServer();
  app.listen(8080, () => console.info(`App running on port 8080`));
}

init();
