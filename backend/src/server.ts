import "dotenv/config";
import express from "express";
import { db } from "./drizzle/db";
const app = express();

app.use(express.json());

app.get("/phones", async (_, res) => {
  const phones = await db.query.PhonesTable.findMany();
  res.json(phones);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});