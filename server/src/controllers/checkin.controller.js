import User from "../models/User.js";
import { buildPlan } from "../services/plan.service.js";
import { buildProfileFromUser } from "../utils/buildProfileFromUser.js";

/**
 * Sanitize and validate check-in data.
 */
function sanitizeCheckIn(body) {
  const errors = [];
  if (!body || typeof body !== "object") {
    return { ok: false, errors: ["checkIn must be an object"] };
  }

  const { energy, mood, symptoms = [] } = body;

  if (energy != null && (typeof energy !== "number" || energy < 1 || energy > 5)) {
    errors.push("energy must be a number between 1 and 5");
  }
  if (mood != null && (typeof mood !== "number" || mood < 1 || mood > 5)) {
    errors.push("mood must be a number between 1 and 5");
  }
  if (symptoms != null && !Array.isArray(symptoms)) {
    errors.push("symptoms must be an array of strings");
  }

  const sanitized = {
    energy: energy ?? null,
    mood: mood ?? null,
    symptoms: Array.isArray(symptoms) ? symptoms.slice(0, 10) : [],
  };

  return { ok: errors.length === 0, errors, sanitized };
}

/**
 * Handle submission of daily check-in.
 */
export async function submitCheckIn(req, res) {
  try {
    const payload = req.body?.checkIn ?? req.body;
    const { ok, errors, sanitized } = sanitizeCheckIn(payload);
    if (!ok) return res.status(400).json({ error: "Invalid check-in", errors });

    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const profile = buildProfileFromUser(user);
    const plan = await buildPlan(profile, sanitized);
    user.currentPlan = plan;
    await user.save();

    return res.json({ plan });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to submit check-in" });
  }
}
