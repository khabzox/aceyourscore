import { unstable_cache } from 'next/cache';
import clientPromise from '@/utils/mongodb'; // Adjust path as per your project structure

// Function to fetch payments from MongoDB
const fetchPayments = async () => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  return await db.collection("payments").find({}).toArray();
};

// Define the cached function using unstable_cache
const getCachedPayments = unstable_cache(
  fetchPayments, // Asynchronous function that fetches payments
  ['payments'], // Unique key parts to identify the cache
  { revalidate: 1 } // Example: Cache for 60 seconds, adjust as needed
);

// Export your API route handler using getCachedPayments
export default async function handler(req, res) {
  try {
    const payments = await getCachedPayments();

    res.status(200).json({ payments });
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

// import clientPromise from "@/utils/mongodb";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const client = await clientPromise;
//     const db = client.db(process.env.MONGODB_DB);

//     const payments = await db.collection("payments").find({}).toArray();

//     return NextResponse.json({ payments }, { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "Error", error }, { status: 500 });
//   }
// }
