import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/clerk", async (req, res) => {
  try {
    const event = req.body;
    console.log("✅ Event received:", JSON.stringify(event, null, 2));

    // We only care about user.created and user.updated events for managing users in our DB
    if (event.type === "user.created" || event.type === "user.updated") {
      const data = event.data;

      // Extract necessary data, handle potential nulls gracefully
      const clerkUserId = data.id; // Clerk's unique user ID
      const email = data.email_addresses?.[0]?.email_address;
      const firstName = data.first_name || '';
      const lastName = data.last_name || '';
      const fullName = `${firstName} ${lastName}`.trim() || 'Unnamed user'; // Fallback name

      // Basic validation
      if (!clerkUserId || !email) {
        console.warn("❌ Webhook warning: Missing clerkUserId or email in event data for user upsert.");
        return res.status(400).json({ success: false, error: "Missing required data for user upsert" });
      }

      try {
        const user = await prisma.user.upsert({
          where: {
            clerkId: clerkUserId, // Try to find a user by their Clerk ID
          },
          update: {
            // Fields to update if the user already exists
            email: email, // Email might change
            name: fullName, // Name might change
            // You can add more fields here if you track them and Clerk can update them
            updatedAt: new Date(), // Manually update updatedAt if not handled automatically by Prisma
          },
          create: {
            // Fields to create if the user does not exist
            clerkId: clerkUserId,
            email: email,
            name: fullName,
            plan: false, // Default plan for new users
          },
        });

        console.log(`✅ User ${event.type === "user.created" ? "created" : "updated"} (upserted):`, user);
        return res.status(200).json({ success: true, message: `User ${event.type === "user.created" ? "created" : "updated"}`, user });

      } catch (prismaError) {
        console.error("❌ Prisma User Upsert Error:", prismaError);
        // It's crucial to inspect prismaError.message for specific details
        // P2002 is the error code for unique constraint violation (for relational dbs, for Mongo it might differ, but message is key)
        return res.status(500).json({
          error: "Database operation failed during user upsert",
          details: prismaError.message, // Provide the exact Prisma error message
          code: prismaError.code, // Prisma error code
        });
      }
    } else if (event.type === "user.deleted") {
      const data = event.data;
      const clerkUserId = data.id;

      if (!clerkUserId) {
        console.warn("❌ Webhook warning: Missing clerkUserId for user.deleted event.");
        return res.status(400).json({ success: false, message: "Missing required data for deletion" });
      }

      try {
        const deletedUser = await prisma.user.delete({
          where: {
            clerkId: clerkUserId,
          },
        });
        console.log(`✅ User with Clerk ID ${clerkUserId} deleted from database:`, deletedUser);
        return res.status(200).json({ success: true, message: "User deleted" });
      } catch (prismaError) {
        // P2025 is "Record to delete does not exist." (for relational dbs, check Mongo specific error codes if needed)
        // For MongoDB, Prisma might not throw P2025 for a non-existent record, but simply return null/undefined.
        // It's safer to check the error message or handle it gracefully.
        if (prismaError.message.includes("Record to delete does not exist")) { // More general check for MongoDB
           console.warn(`⚠️ User with Clerk ID ${clerkUserId} not found in database for deletion (already deleted or never existed).`);
           return res.status(200).json({ success: true, message: "User not found, nothing to delete" });
        }
        console.error("❌ Prisma User Deletion Error:", prismaError);
        return res.status(500).json({
          error: "Database operation failed during user deletion",
          details: prismaError.message,
          code: prismaError.code,
        });
      }
    }

    // For any other unhandled event types, acknowledge successfully
    return res.status(200).json({ message: "Unhandled event type" });

  } catch (error) {
    console.error("❌ Webhook error (general catch):", error);
    return res.status(500).json({
      error: "Webhook failed",
      details: error.message,
    });
  }
});

export default router;