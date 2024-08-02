import { getFormattedData } from "./data-table";
import DataTableClient from "./DataTableClient";

export default async function DataTableServer() {
  try {
    const data = await getFormattedData();
    return <DataTableClient data={data} />;
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data</div>;
  }
}
