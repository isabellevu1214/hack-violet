import User from "../models/User.js";
import { buildPlan } from "../services/plan.service.js";
import { buildProfileFromUser } from "../utils/buildProfileFromUser.js";

/**
 * Handle generating a personalized plan based on user profile and optional check-in data.
 */
export async function generatePlan(req, res) {
  try {
    const { checkIn } = req.body || {};
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const profile = buildProfileFromUser(user);

    const plan = await buildPlan(profile, checkIn);
    user.currentPlan = plan;
    await user.save();

    return res.json(plan);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to generate plan" });
  }
}
