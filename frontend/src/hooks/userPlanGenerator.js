import { useState } from "react";
import { generatePlan } from "../api/planApi";

export function userPlanGenerator() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function run(profile) {
    setLoading(true);
    setError("");
    try {
      const result = await generatePlan(profile);
      setData(result);
    } catch (e) {
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, run };
}
export default userPlanGenerator;