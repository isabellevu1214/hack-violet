import ProfileForm from "../components/ProfileForm";
import PlanResults from "../components/PlanResults";
import { usePlanGenerator } from "../hooks/usePlanGenerator";

export default function PlannerPage() {
  const { data, loading, error, run } = usePlanGenerator();

  return (
    <div style={{ padding: 24 }}>
      <h1>Cycle-Aware Plan Generator</h1>
      <p>Enter your info to get a 7-day workout + meal plan.</p>

      <ProfileForm onSubmit={run} loading={loading} />

      {error && <p style={{ color: "crimson" }}>{error}</p>}
      <PlanResults plan={data} />
    </div>
  );
}
