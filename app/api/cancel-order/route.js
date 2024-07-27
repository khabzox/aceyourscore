// export async function POST(req) {
//   const { orderId } = await req.json();
//   try {
//     const res = await fetch(
//       `https://api.lemonsqueezy.com/v1/orders/${orderId}/cancel`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${process.env.LEMON_SQUEEZY_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (!res.ok) {
//       throw new Error("Failed to cancel the order");
//     }

//     return new Response(
//       JSON.stringify({ message: "Order cancelled successfully" }),
//       { status: 200 }
//     );
//   } catch (error) {
//     return new Response(JSON.stringify({ message: error.message }), {
//       status: 500,
//     });
//   }
// }
