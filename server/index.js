require("dotenv/config");
const express = require("express");
const databaseConfig = require("./config/database");
const expressConfig = require("./config/express");
const routerConfig = require("./config/routes");

start();
async function start() {
  const app = express();
  expressConfig(app);
  await databaseConfig(app);
  routerConfig(app);

  app.listen(process.env.PORT, () => console.log(`REST Service Working`));
}
