import rateLimit from "express-rate-limit";

const defaultWindowMs = 60 * 1000;

export const planLimiter = rateLimit({
  windowMs: defaultWindowMs,
  limit: 12,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "Too many plan requests, please try again soon." },
});

export const authLimiter = rateLimit({
  windowMs: defaultWindowMs,
  limit: 20,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "Too many auth requests, please try again soon." },
});
