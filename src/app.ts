import express from "express";
import config from "config";

const app = express();

const port = config.get<number>("port")

const url = `http://localhost:${port}`;

//json middleware
app.use(express.json());

app.listen(3000, async () => {
  console.log(`🚀 application running on url ${url} 🚀`);
});
