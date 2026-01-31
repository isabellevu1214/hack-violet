import { apiFetch } from "./client";

export function generatePlan(profile) {
  return apiFetch("/api/plan", {
    method: "POST",
    body: JSON.stringify({ profile }),
  });
}
