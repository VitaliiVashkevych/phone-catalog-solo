import "dotenv/config";

import { db } from "./drizzle/db";
import { PhonesTable } from "./drizzle/schema";
import { eq } from "drizzle-orm";

async function main() {
  // await db.insert(PhonesTable).values(data);
}

main();
