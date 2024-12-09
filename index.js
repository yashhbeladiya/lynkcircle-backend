import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import feedRoutes from "./routes/feed.route.js";
import notificationRoutes from "./routes/notification.route.js";
import connectionRoutes from "./routes/connection.route.js";
import workRoutes from "./routes/work.route.js";
import { connectDB } from "./lib/db.js";
import WorkDetail from "./models/workdetail.model.js";
import workDetailRoutes from "./routes/workDetails.route.js";

dotenv.config();

const app = express({limit:"10mb"});

const PORT = process.env.PORT || 5100;
app.use(cors({ origin: true, credentials: true, methods: "GET, POST, PUT, DELETE" })); // origin: true allows requests from all origins


app.use(express.json()); // Middleware to parse JSON data in the request body
app.use(cookieParser()); // Middleware to parse cookies in the request headers

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/feed", feedRoutes);
app.use("/api/v1/notifications", notificationRoutes);
app.use("/api/v1/connections", connectionRoutes);
app.use("/api/v1/works", workRoutes);
app.use("/api/v1/workdetails", workDetailRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
