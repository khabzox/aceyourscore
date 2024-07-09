import { lemonSqueezyApiInstance } from "@/utils/axios";

export const dynamic = "force-dynamic";

export async function POST(req) {
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

    let examName = "";

    switch (reqData.productId.toString()) {
      case "442338":
        examName = "TOEFL";
        break;
      case "443230":
        examName = "IELTS";
        break;
      case "443228":
        examName = "TOEIC";
        break;
      case "443229":
        examName = "SAT";
        break;
      default:
        examName = "unrecognized";
    }

    const sendMessageToWhatsApp = generateWhatsAppUrl(
      userId,
      examName,
      userFullName,
      userEmail
    );

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
            redirect_url: sendMessageToWhatsApp,
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

function generateWhatsAppUrl(userId, examName, userFullName, userEmail) {
  const baseUrl = "https://wa.me/+212697998010?text=";
  const message = `UserID: ${userId}\nExam: This exam is ${examName}.\nUserFullName: ${userFullName}\nUserEmail: ${userEmail}`;
  return baseUrl + encodeURIComponent(message);
}
