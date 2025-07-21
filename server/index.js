import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { clerkMiddleware, requireAuth } from "@clerk/express";

// routes import
import clerkWebhookRouter from "./routes/api/webhooks/clerk.js";

const prisma = new PrismaClient();

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: true, // allows any domain to access server for now
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(clerkMiddleware());
// app.use(requireAuth())

//health check
app.get("/", (req, res) => res.send("Server is Live!"));

//routes
app.use("/v1/api/webhooks", clerkWebhookRouter);

app.use((err, req, res, next) => {
  console.error("❌ Express Error Handler:", err);
  res
    .status(500)
    .json({ error: "Internal Server Error", details: err.message });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
