import { db } from "@/db";
import { customers } from "@/db/schema";
import { ilike, or, sql } from "drizzle-orm";

export async function getCustomerSearchResults(searchText: string) {
  // For full name search, use drizzle-orm's `sql` to concat fields
  // Note: this will work with Postgres
  const results = await db
    .select()
    .from(customers)
    .where(
      or(
        ilike(customers.firstName, `%${searchText}%`),
        ilike(customers.lastName, `%${searchText}%`),
        ilike(customers.email, `%${searchText}%`),
        ilike(customers.phone, `%${searchText}%`),
        ilike(customers.city, `%${searchText}%`),
        ilike(customers.zip, `%${searchText}%`),
        // For full name, use a raw SQL expression
      ),
    );
  return results;
}
