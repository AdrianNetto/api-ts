require("dotenv").config;

import express from "express";
import config from "config";
import router from "./router";
import db from "../config/db";


const app = express();

const port = config.get<number>("port");

const url = `http://localhost:${port}`;

app.use(express.json());

app.use("/api", router);

app.listen(3000, async () => {
  await db();

  console.log(`🚀 Application Running on URL: ${url} 🚀`);
});
