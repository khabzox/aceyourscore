import fetch from "node-fetch"; // Ensure node-fetch is installed or use native fetch in Next.js

export async function POST(req, res) {
  const { email, firstName } = req.body;

  try {
    // Create user with Clerk (you need to add the correct Clerk API call here)
    // const user = await createClerkUser(email, firstName); // Replace with actual Clerk API call

    // Send welcome email
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email/welcome`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name: firstName }),
    });

    res.status(200).json({ message: "Sign-up and email sending successful" });
  } catch (error) {
    console.error("Error handling sign-up:", error);
    res.status(500).json({ message: "Sign-up failed", error: error.message });
  }
}
