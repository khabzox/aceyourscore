import crypto from "crypto";
import clientPromise from "@/utils/mongodb";

export async function POST(req) {
  try {
    const clonedReq = req.clone();
    const eventType = req.headers.get("X-Event-Name");
    const body = await req.json();

    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET;
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(
      hmac.update(await clonedReq.text()).digest("hex"),
      "utf8"
    );
    const signature = Buffer.from(req.headers.get("X-Signature") || "", "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature.");
    }

    console.log(body);

    if (eventType === "order_created") {
      const clerkUser = {
        userID: body.meta.custom_data.user_id,
        userFullName: body.meta.custom_data.userFullName,
        userEmail: body.meta.custom_data.userEmail,
      };
      const lemonsqueezyUser = {
        customerInfo: {
          identifier: body.data.attributes.identifier,
          customerID: body.data.attributes.customer_id,
          created_at: body.data.attributes.created_at,
          updated_at: body.data.attributes.updated_at,
        },
        paymentsInfo: {
          status: body.data.attributes.status,
          refunded_at: body.data.attributes.refunded_at,
          total_formatted: body.data.attributes.total_formatted,
        },
        customerName: body.data.attributes.user_name,
        customerEmail: body.data.attributes.user_email,
      };
      const examName = body.data.attributes.first_order_item.product_name;

      const client = await clientPromise;
      const db = client.db(process.env.MONGODB_DB);

      // Find existing user by clerkUser.userID
      const existingUser = await db.collection("payments").findOne({
        "clerkUser.userID": clerkUser.userID,
      });

      if (existingUser) {
        // Update existing user's information
        await db.collection("payments").updateOne(
          { "clerkUser.userID": clerkUser.userID },
          {
            $set: {
              lemonsqueezyUser,
              examName,
              timestamp: new Date(),
            },
          }
        );
        console.log("User information updated in MongoDB");
      } else {
        // Insert new user information
        const result = await db.collection("payments").insertOne({
          clerkUser,
          lemonsqueezyUser,
          examName,
          timestamp: new Date(),
        });
        console.log("Data saved to MongoDB:", result);
      }
    }

    return new Response(JSON.stringify({ message: "Webhook received" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
}

// import crypto from "crypto";
// import clientPromise from "@/utils/mongodb";

// export async function POST(req) {
//   try {
//     const clonedReq = req.clone();
//     const eventType = req.headers.get("X-Event-Name");
//     const body = await req.json();

//     const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET;
//     const hmac = crypto.createHmac("sha256", secret);
//     const digest = Buffer.from(
//       hmac.update(await clonedReq.text()).digest("hex"),
//       "utf8"
//     );
//     const signature = Buffer.from(req.headers.get("X-Signature") || "", "utf8");

//     if (!crypto.timingSafeEqual(digest, signature)) {
//       throw new Error("Invalid signature.");
//     }

//     console.log(body);

//     if (eventType === "order_created") {
//       const clerkUser = {
//         userID: body.meta.custom_data.user_id,
//         userFullName: body.meta.custom_data.userFullName,
//         userEmail: body.meta.custom_data.userEmail,
//       };
//       const lemonsqueezyUser = {
//         customerInfo: {
//           identifier: body.data.attributes.identifier,
//           customerID: body.data.attributes.customer_id,
//           created_at: body.data.attributes.created_at,
//           updated_at: body.data.attributes.updated_at,
//         },
//         paymentsInfo: {
//           status: body.data.attributes.status,
//           refunded_at: body.data.attributes.refunded_at,
//           total_formatted: body.data.attributes.total_formatted,
//         },
//         customerName: body.data.attributes.user_name,
//         customerEmail: body.data.attributes.user_email,
//       };
//       const examName = body.data.attributes.first_order_item.product_name;

//       const client = await clientPromise;
//       const db = client.db(process.env.MONGODB_DB);

//       const result = await db.collection("payments").insertOne({
//         clerkUser,
//         lemonsqueezyUser,
//         examName,
//         timestamp: new Date(),
//       });

//       console.log("Data saved to MongoDB:", result);
//     }

//     return new Response(JSON.stringify({ message: "Webhook received" }), {
//       status: 200,
//     });
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify({ message: "Server error" }), {
//       status: 500,
//     });
//   }
// }
