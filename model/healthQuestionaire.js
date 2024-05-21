// import { string } from "joi";
import { Schema, model } from "mongoose";

const healthQuestionaireSchema = Schema({
  patientId: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: [true, "Please Pass in the Patient Id of this demographics record"],
  },
  hospital: String,
  litIntInDoingThings: Number,
  feelingDepress: Number,
  troubFallAsleep: Number,
  feelingTired: Number,
  poorAppetite: Number,
  feelingBadAbtYourself: Number,
  troubConcentrating: Number,
  movingSpeakingSlowly: Number,
  deadThoughts: Number,
  totalScore: Number,
  howDifficult: {
    type: String,
    enum: [
      "Not difficult at all",
      "Somewhat difficult",
      "Very difficult",
      "Extremely difficult",
    ],
  },
});

const HealthQuestionaire = new model(
  "HealthQuestionnaire",
  healthQuestionaireSchema
);
export { HealthQuestionaire };
