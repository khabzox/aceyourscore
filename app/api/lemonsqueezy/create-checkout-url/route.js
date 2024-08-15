import { lemonSqueezyApiInstance } from "@/libs/axios";
import { auth } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  const { userId } = auth();

  if (!userId) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
  }

  try {
    const reqData = await req.json();

    if (!reqData.productId) {
      return new Response(JSON.stringify({ message: "Product id required" }), {
        status: 400,
      });
    }

    const userId = reqData.userId.toString();
    const userFullName = reqData.userFullName.toString();
    const userEmail = reqData.userEmail.toString();

    const response = await lemonSqueezyApiInstance.post("/checkouts", {
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            custom: {
              user_id: userId,
              userFullName: userFullName,
              userEmail: userEmail,
            },
          },
          product_options: {
            redirect_url: "https://www.aceyourscore.com/dashboard",
          },
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: process.env.LEMON_SQUEEZY_STORE_ID.toString(),
            },
          },
          variant: {
            data: {
              type: "variants",
              id: reqData.productId.toString(),
            },
          },
        },
      },
    });

    const checkoutUrl = response.data.data.attributes.url;

    console.log(response.data);

    return new Response(JSON.stringify({ checkoutUrl }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "An error occurred" }), {
      status: 500,
    });
  }
}