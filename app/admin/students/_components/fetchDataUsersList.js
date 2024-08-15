import config from '@/config';
import { auth } from '@clerk/nextjs/server';

export async function fetchDataUsersList() {
    try {
        const { getToken } = auth();
        const token = await getToken();

        if (!token) {
            throw new Error("Failed to obtain authentication token");
        }

        const res = await fetch(`${config.domainName}/api/lemonsqueezy/payments`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch payments data: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        console.log("Data fetched from API:", data);

        if (!data.payments || !Array.isArray(data.payments)) {
            throw new Error("Invalid data structure received from API");
        }

        return data.payments;
    } catch (error) {
        console.error("Error loading data: ", error);
        throw error;
    }
}