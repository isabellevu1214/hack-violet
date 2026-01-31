export function validateProfile(profile) {
  const errors = [];
  if (!profile || typeof profile !== "object") errors.push("profile must be an object");

  const {
    age,
    goal,
    activityLevel,
    cyclePhase,
    symptoms = [],
    dietaryPrefs = [],
    restrictions = [],
  } = profile || {};

  if (age != null && (typeof age !== "number" || age < 13 || age > 65)) {
    errors.push("age must be a number between 13 and 65");
  }
  if (!goal || typeof goal !== "string") errors.push("goal is required (string)");
  if (!activityLevel || typeof activityLevel !== "string") errors.push("activityLevel is required (string)");
  if (!cyclePhase || typeof cyclePhase !== "string") errors.push("cyclePhase is required (string)");

  const sanitized = {
    age: age ?? null,
    goal,
    activityLevel,
    cyclePhase,
    symptoms: Array.isArray(symptoms) ? symptoms.slice(0, 10) : [],
    dietaryPrefs: Array.isArray(dietaryPrefs) ? dietaryPrefs.slice(0, 10) : [],
    restrictions: Array.isArray(restrictions) ? restrictions.slice(0, 10) : [],
  };

  return { ok: errors.length === 0, errors, sanitized };
}
