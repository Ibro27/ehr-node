import { Schema, model } from "mongoose";

const coverageSchema = Schema({
  patientId: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: [true, "Please Enter the Patient Id"],
  },
  selfPatVisit: Boolean,
  healthInsuredVisit: Boolean,
  consentMedTreatment: Boolean,
  noticeOfPrivacyPractice: Boolean,
  officePolicyOnPayment: Boolean,
  nameOfSignee: String,
  todaysVisit: String,
  signOfParent: String,
  relToInsured: {
    type: String,
    required: true,
    enum: ["Self", "Spouse", "Dependent", "Other"],
  },
  relToPatient: {
    type: String,
    required: true,
    enum: ["Self", "Spouse", "Dependent", "Other"],
  },
});

const Coverage = new model("Coverage", coverageSchema);
export { Coverage };
