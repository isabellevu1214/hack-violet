import { Router } from "express";
import { generatePlan } from "../controllers/plan.controller.js";

const router = Router();

router.post("/plan", generatePlan);

export default router;
