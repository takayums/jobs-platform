import { JOB_TYPE } from "@/libs/utils";
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    jobType: { type: String, enum: JOB_TYPE, default: JOB_TYPE.FULL_TIME },
    title: { type: String, required: true },
    salary: { type: Number, required: true },
    category: { type: mongoose.Types.ObjectId, ref: "Category" },
    remote: { type: Boolean, required: true },
    isPublised: { type: Boolean, require: true },
    requirements: { type: String, required: true },
    benefits: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    companyName: { type: String, required: true },
    contactPhone: { type: String, required: true },
    contactEmail: { type: String, required: true },
    clertId: { type: String, required: true },
  },
  { timestamps: true },
);

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job;
