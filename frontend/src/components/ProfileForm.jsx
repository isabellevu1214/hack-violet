import { useState } from "react";
import { defaultProfile } from "../utils/defaults";

export default function ProfileForm({ onSubmit, loading }) {
  const [profile, setProfile] = useState(defaultProfile);

  function update(key, value) {
    setProfile((p) => ({ ...p, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(profile);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 520 }}>
      <label>
        Goal
        <input value={profile.goal} onChange={(e) => update("goal", e.target.value)} />
      </label>

      <label>
        Cycle phase
        <select value={profile.cyclePhase} onChange={(e) => update("cyclePhase", e.target.value)}>
          <option value="menstrual">Menstrual</option>
          <option value="follicular">Follicular</option>
          <option value="ovulation">Ovulation</option>
          <option value="luteal">Luteal</option>
        </select>
      </label>

      <label>
        Activity level
        <select value={profile.activityLevel} onChange={(e) => update("activityLevel", e.target.value)}>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
      </label>

      <label>
        Symptoms (comma separated)
        <input
          value={profile.symptoms.join(", ")}
          onChange={(e) => update("symptoms", e.target.value.split(",").map(s => s.trim()).filter(Boolean))}
        />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Generating..." : "Generate Plan"}
      </button>
    </form>
  );
}
