import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.use("/api/employees", employeeRoutes);
app.use("/api/enquiries", enquiryRoutes);

app.get("/", (req, res) => res.send("🚀 Fastor CRM Backend is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
