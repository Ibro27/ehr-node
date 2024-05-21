import { Schema, model } from "mongoose";

const alcoholSchema = Schema({
  patientId: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: [true, "Please Pass in the Patient Id of this alcohol record"],
  },
  cutDownDrinking: Boolean,
  criticizeDrinking: Boolean,
  guiltyByDrinking: Boolean,
  drinkCalmNerves: Boolean,
});

const Alcohol = new model("Alcohol", alcoholSchema);
export { Alcohol };
