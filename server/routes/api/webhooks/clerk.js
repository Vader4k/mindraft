import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/clerk", async (req, res) => {
  try {
    const event = req.body;
    console.log("✅ Event received:", JSON.stringify(event, null, 2));

    if (event.type === "user.created") {
      const data = event.data;

      const user = await prisma.user.create({
        data: {
          email: data.email_addresses?.[0]?.email_address,
          name: `${data.first_name || ''} ${data.last_name || ''}`.trim() || 'Unnamed user',
          plan: false,
        },
      });

      console.log("✅ User saved:", user);
      return res.status(200).json({ success: true, message: "User created", user });
    }

    return res.status(200).json({ message: "Unhandled event type" });
  } catch (error) {
    console.error("❌ Webhook error:", error);
    return res.status(500).json({
      error: "Webhook failed",
      details: error.message,
    });
  }
});

export default router