import "dotenv/config";
import express from "express";
import { db } from "./drizzle/db";
import cors from "cors";
import { count } from "drizzle-orm";
import { AccessoriesTable, PhonesTable, TabletsTable } from "./drizzle/schema";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/phones", async (_, res) => {
  const products = await db.query.PhonesTable.findMany();
  const productsQuantity = await db.select({ count: count() }).from(PhonesTable);

  res.json({products, productsQuantity: productsQuantity[0].count});
});
app.get("/tablets", async (req, res) => {
  const limit = Number(req.query.limit);
  const offset = Number(req.query.offset);

  const products = await db.query.TabletsTable.findMany({ limit, offset });
  const productsQuantity = await db.select({ count: count() }).from(TabletsTable);

  res.json({products, productsQuantity: productsQuantity[0].count});
});
app.get("/accessories", async (_, res) => {
  const products = await db.query.AccessoriesTable.findMany();
  const productsQuantity = await db.select({ count: count() }).from(AccessoriesTable);

  res.json({products, productsQuantity: productsQuantity[0].count});
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});