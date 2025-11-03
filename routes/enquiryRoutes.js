import express from "express";
import { createEnquiry, getPublicEnquiries, getPrivateEnquiries, claimEnquiry } from "../controllers/enquiryController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createEnquiry); // Public form
router.get("/public", getPublicEnquiries);
router.get("/private", authMiddleware, getPrivateEnquiries);
router.post("/claim/:id", authMiddleware, claimEnquiry);

export default router;
