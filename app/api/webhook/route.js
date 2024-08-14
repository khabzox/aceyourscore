import crypto from "crypto";
import clientPromise from "@/libs/mongodb";

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

    if (eventType === "order_created") {
      // User Info when he on site
      const registeredUser = {
        id: body.meta.custom_data.user_id,
        fullName: body.meta.custom_data.userFullName,
        email: body.meta.custom_data.userEmail,
      };
      // User info after he pay
      const paymentUser = {
        customer: {
          id: body.data.attributes.customer_id,
          name: body.data.attributes.user_name,
          email: body.data.attributes.user_email,
          examName: body.data.attributes.first_order_item.product_name,
        },
        payment: {
          status: body.data.attributes.status,
          refunded: body.data.attributes.refunded,
          orderNumber: body.data.attributes.order_number,
          totalFormatted: body.data.attributes.total_formatted,
        },
        // identifier: body.data.attributes.identifier,
        // webhookId: body.data.meta.webhook_id,
      };

      const client = await clientPromise;
      const db = client.db(process.env.MONGODB_DB);

      const updateData = {
        paymentUser,
        timestamp: new Date(),
      };

      const newUserData = {
        registeredUser,
        paymentUser,
        timestamp: new Date(),
      };

      // Find existing user by registeredUser.id
      const existingUser = await db.collection("payments").findOne({
        "registeredUser.id": registeredUser.id,
      });

      if (existingUser) {
        // Update existing user's information
        await db.collection("payments").updateOne(
          { "registeredUser.id": registeredUser.id },
          {
            $set: updateData,
          }
        );
      } else {
        // Insert new user information
        const result = await db.collection("payments").insertOne(newUserData);
      }

      // create history for every payments in db
      const resultHistory = await db
        .collection("payments-history")
        .insertOne(newUserData);
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
