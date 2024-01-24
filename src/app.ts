require("dotenv").config;

import express from "express";
import config from "config";
import router from "./router";
import db from "../config/db";
import Logger from "../config/logger";
import morganMiddleware from "./middleware/morganMiddleware";

const app = express();

app.use(express.json())

const port = config.get<number>("port");

const url = `http://localhost:${port}`;

app.use(morganMiddleware);

app.use("/api", router);

app.listen(3000, async () => {
  await db();

  Logger.info(`🚀 Application Running on URL: ${url} 🚀`);
});
