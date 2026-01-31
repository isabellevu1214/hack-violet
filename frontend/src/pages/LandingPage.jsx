import AuthButtons from "../components/AuthButtons";
import "../styles/landing.css";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-card">
        <h1 className="landing-title">Violet</h1>
        <p className="landing-tagline">
          Cycle-aware fitness & nutrition built for women.
        </p>

        <AuthButtons />

        <p className="landing-footnote">
          Personalized workouts and meals based on your menstrual cycle.
        </p>
      </div>
    </div>
  );
}
