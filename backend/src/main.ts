import "dotenv/config";

import { db } from "./drizzle/db";
import { AccessoriesTable, PhonesTable, TabletsTable } from "./drizzle/schema";
import phones from "../../frontend/public/api/phones.json";
import tablets from "../../frontend/public/api/tablets.json";
import accessories from "../../frontend/public/api/accessories.json";

async function main() {
  await db.insert(PhonesTable).values(phones);
  await db.insert(TabletsTable).values(tablets);
  await db.insert(AccessoriesTable).values(accessories);
}

main();
