import express from "express";
import cors from "cors";
import { Robots } from "./robots/resolvers";

export async function initServer() {
  const app = express();
  app.use(cors());

  //app.use("/", (req, res) => {
  //  res.send("Hello World");
  //});

  app.use("/robots", Robots.getAllRobots);

  return app;
}
