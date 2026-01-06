import CustomerSearch from "@/app/(rs)/customers/form/CustomerSearch";
import { getCustomerSearchResults } from "@/lib/queries/getCustomerSearchResult";
import * as Sentry from "@sentry/nextjs";
import CustomerTable from "@/app/(rs)/customers/form/CustomerTable";

export const metadata = {
  title: "Customer Search",
};

export default async function Customers({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { searchText } = await searchParams;

  if (!searchText) return <CustomerSearch />;

  const span = Sentry.startInactiveSpan({
    name: "getCustomerSearchResults-2",
    op: "db",
  });

  const results = await getCustomerSearchResults(searchText);

  span.end();

  return (
    <>
      <CustomerSearch />
      <CustomerTable data={results} />
    </>
  );
}
