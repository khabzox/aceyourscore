import crypto from "crypto";

export async function POST(req) {
  try {
    // Catch the event type
    const clonedReq = req.clone();
    const eventType = req.headers.get("X-Event-Name");
    const body = await req.json();

    // Check signature
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

    // // Logic according to event
    // if (eventType === "order_created") {
    //   const userId = body.meta.custom_data.user_id;
    //   const isSuccessful = body.data.attributes.status === "paid";
    // }

    if (eventType === "order_created") {
      const userId = body.meta.custom_data.user_id;
      const isSuccessful = body.data.attributes.status === "paid";
      // if (isSuccessful) {
      //   // Here you can implement your logic to redirect the user
      //   // For example, you could update a database field with the WhatsApp link
      //   // that your frontend can then use to redirect the user
      // }
    }
    return Response.json({ message: "Webhook received" });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
