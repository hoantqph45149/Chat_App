import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import conectToMongooDB from "./db/connectToMongooDB.js";
import authRoutes from "./Routes/auth.routes.js";
import messageRoutes from "./Routes/message.routes.js";
import userRoutes from "./Routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  conectToMongooDB();
  console.log(`Server is running on port ${PORT}`);
});
