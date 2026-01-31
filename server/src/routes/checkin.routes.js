import { Router } from "express";
import { submitCheckIn } from "../controllers/checkin.controller.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.post("/checkin", requireAuth, submitCheckIn);

export default router;
