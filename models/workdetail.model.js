import mongoose from "mongoose";

const workDetailSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  servicesOffered: [{ type: String }], // Example: "Plumbing", "Carpentry"
  hourlyRate: { type: Number },
  availability: {
    days: [{ type: String, enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] }],
    timeSlots: [
      {
        start: { type: String },
        end: { type: String },
      },
    ],
  },
  jobHistory: [
    {
      clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      jobTitle: String,
      description: String,
      dateCompleted: Date,
    },
  ],
});

const WorkDetail = mongoose.model("WorkDetail", workDetailSchema);

export default WorkDetail;