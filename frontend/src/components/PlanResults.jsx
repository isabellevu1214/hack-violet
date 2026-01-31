export default function PlanResults({ plan }) {
  if (!plan) return null;

  // If backend returned "raw" fallback
  if (plan.raw) {
    return (
      <div style={{ whiteSpace: "pre-wrap", marginTop: 16 }}>
        <h3>Raw output</h3>
        <pre>{plan.raw}</pre>
      </div>
    );
  }

  return (
    <div style={{ marginTop: 16, display: "grid", gap: 16 }}>
      <div>
        <h3>Summary</h3>
        <p>{plan.summary}</p>
      </div>

      <div>
        <h3>Workouts</h3>
        <ul>
          {plan.workouts?.map((w) => (
            <li key={w.day}>
              <b>Day {w.day}:</b> {w.focus} — {w.details} ({w.durationMins} mins)
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Meals</h3>
        <ul>
          {plan.meals?.map((m) => (
            <li key={m.day}>
              <b>Day {m.day}:</b> {m.breakfast} / {m.lunch} / {m.dinner} (snacks: {m.snacks})
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Adjustments</h3>
        <ul>
          {plan.adjustments?.map((a, i) => <li key={i}>{a}</li>)}
        </ul>
      </div>

      <div>
        <h3>Safety notes</h3>
        <ul>
          {plan.safetyNotes?.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>
    </div>
  );
}
