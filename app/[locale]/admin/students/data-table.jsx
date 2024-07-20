import config from "@/config";

// Function to fetch user list data
export async function fetchDataUsersList() {
  try {
    const res = await fetch(`${config.domainNameProduction}/en/api/payments`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch payments data");
    }

    const data = await res.json();
    return data.payments; // Access the 'payments' array
  } catch (error) {
    console.log("Error loading data: ", error);
  }
}

// Function to get data and format it
export async function getFormattedData() {
  const fetchedData = await fetchDataUsersList();

  if (!fetchedData) return [];

  // Map the data to match the table columns
  const formattedData = fetchedData.map((item) => ({
    id: item._id,
    examName: item.examName,
    status: item.lemonsqueezyUser.paymentsInfo.status,
    email: item.lemonsqueezyUser.customerEmail,
  }));

  return formattedData;
}

// Server-side function
export async function getServerSideProps() {
  const data = await getFormattedData();

  return {
    props: { data },
  };
}
