import express from "express";
import { deleteEmail, generateEmailController,getEmailHistory, updateEmail } from "../controllers/emailController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/generate-email",authMiddleware,generateEmailController);
router.get("/history",authMiddleware,getEmailHistory);
router.delete("/:id",authMiddleware,deleteEmail);
router.put("/:id",authMiddleware,updateEmail);
export default router;
