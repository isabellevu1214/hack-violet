import { validateProfile } from "../utils/validateProfile.js";
import { buildPlan } from "../services/plan.service.js";

export async function generatePlan(req, res) {
  try {
    const profile = req.body?.profile;
    const { ok, errors, sanitized } = validateProfile(profile);

    if (!ok) return res.status(400).json({ error: "Invalid profile", errors });

    const plan = await buildPlan(sanitized);
    return res.json(plan);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to generate plan" });
  }
}
