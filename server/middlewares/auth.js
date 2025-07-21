//middleware to check userId and premium plan
import { PrismaClient } from "@prisma/client";
import { getAuth } from "@clerk/express";

const prisma = new PrismaClient();

export const auth = async (req, res, next) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    //find user by clerk email since u are not storing user id
    const user = await prisma.user.findUnique({
      where: {
        email: req.auth.claims?.email,
      },
    });

    if (!user) {
      return res.status(404).json({ success: false, error: "user not found" });
    }

    //checks for user plan status
    if (user && !user.plan) {
      return res
        .status(403)
        .json({ success: false, error: "Free plan restriction" });
    }

    next();
  } catch (error) {
    console.error("server error from auth middleware:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
