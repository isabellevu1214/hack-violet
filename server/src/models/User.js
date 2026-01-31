import mongoose from "mongoose";

const cycleDetailsSchema = new mongoose.Schema(
  {
    lastPeriodDate: { type: Date },
    avgCycleLength: { type: Number },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    height: { type: Number },
    weight: { type: Number },
    goals: { type: [String], default: [] },
    equipment: { type: String, enum: ["Gym", "Home", "None"], default: "None" },
    cycleTracking: { type: Boolean, default: false },
    cycleDetails: { type: cycleDetailsSchema },
    currentPlan: { type: mongoose.Schema.Types.Mixed },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
