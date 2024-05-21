import { Schema, model } from "mongoose";

const appointmentSchema = Schema({
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: [
      true,
      "Please Specify the Company Id this Patient wants to go for an appointment on",
    ],
  },
  firstName: String,
  lastName: String,
  appointmentWith: {
    type: Schema.Types.ObjectId,
    ref: "Staff",
    required: [
      true,
      "Please Specify the Staff Id of the Staff the patient will be meeting with",
    ],
  },
  visitDate: String,
  appointmentTitle: String,
  appointmentDescription: String,
});

const Appointment = new model("Appointment", appointmentSchema);
export { Appointment };
