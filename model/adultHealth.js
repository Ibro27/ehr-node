import { Schema, model } from "mongoose";

const adultHealthSchema = Schema({
  patientId: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: [true, "Please Pass in the patient id"],
  },
  date: {
    type: Date,
    default: function () {
      const timezoneOffset = new Date().toLocaleString("en-US", {
        timeZone: "Africa/Lagos",
      });
      return new Date(timezoneOffset);
    },
  }, 
  dob: String,
  name: String,
  seenForToday: String,
  startBotheringYou: String,
  abnormalWeigthLoss: Boolean,
  abnormalWeigthGain: Boolean,
  excessiveFatigue: Boolean,
  insomnia: Boolean,
  gout: Boolean,
  rheumaticFever: Boolean,
  highCholesterol: Boolean,
  heartAttack: Boolean,
  highBloodPressure: Boolean,
  arthritis: Boolean,
  abnormalMammogram: Boolean,
  pregnancies: Boolean,
  liveBirths: Boolean,
  abortions: Boolean,
  anemia: Boolean,
  cancerTumor: Boolean,
  brokenBones: Boolean,
  abnormalPapSmear: Boolean,
  contactGlasses: Boolean,
  glaucoma: Boolean,
  cataracts: Boolean,
  bloodInStool: Boolean,
  diarrheaConstipation: Boolean,
  otherProblemsWithVision: Boolean,
  dentures: Boolean,
  dentalProblems: Boolean,
  recurrentScores: Boolean,
  breathingProblems: Boolean,
  freqBronchitis: Boolean,
  emphysema: Boolean,
  pneumonia: Boolean,
  asthma: Boolean,
  hermorrhoids: Boolean,
  abdominalPains: Boolean,
  colonPolyp: Boolean,
  angina: Boolean,
  freqChestPain: Boolean,
  irregularHeartBeat: Boolean,
  heartMurmur: Boolean,
  rashes: Boolean,
  hives: Boolean,
  moles: Boolean,
  seizure: Boolean,
  stroke: Boolean,
  urinaryFrequeny: Boolean,
  allergies: Boolean,
  freqSinusInfections: Boolean,
  bladderInfections: Boolean,
  prostateProblems: Boolean,
  numbness: Boolean,
  weakness: Boolean,
  memoryLoss: Boolean,
  headaches: Boolean,
  hearingLoss: Boolean,
  depression: Boolean,
  anxietyPanic: Boolean,
  suicideAttempt: Boolean,
  physicalAbuse: Boolean,
  sexualAbuse: Boolean,
  mentalIllness: Boolean,
  earProblems: Boolean,
  ringingInEars: Boolean,
  heartBurn: Boolean,
  ulcerDisease: Boolean,
  gallbladderDisease: Boolean,
  urinaryIncontinence: Boolean,
  kidneyProblems: Boolean,
  diabetes: Boolean,
  thyroidDisease: Boolean,
  sexTransDiseases: Boolean,
  expToFamMemWith: Array,
  pastSixMonSigStress: Boolean,
  otherMedProblems: String,
  suggeryList: Array,
  medAllergiesList: Array,
  hadLastYear: Array,
  tobaccoProducts: Array,
  howMuchSmokePerDay: String,
  howManyYears: String,
  wishToQuit: String,
  whenDoYouWishToQuit: String,
  alcoholDrinkWeekly: String,
  problemWithAlcohol: Boolean,
  illicitDrugs: Boolean,
  howMuchCaffeineDaily: String,
  sexuallyActive: Boolean,
  partners: {
    type: String,
    enum: ["Male", "Female", "Both"],
  },
  useContraceptives: Boolean,
  practiceSafeSex: Boolean,
  hadBloodTrans: Boolean,
  bloodTransYear: String,
  maritalStatus: {
    type: String,
    enum: [
      "Single",
      "Married",
      "Seperated",
      "Divorced",
      "Widowed",
      "Partnered",
    ],
  },
  currently: {
    type: String,
    enum: ["Employed", "Unemployed", "Self Employed", "Retired"],
  },
  yourOccupation: String,
  historyOfDisease: Array,
  fatherMedProblems: Array,
  motherMedProblems: Array,
  kidsMedProblems: Array,
  siblingsMedProblem: Array,
  patientSign: String,
  patientDate: String,
  physicianSign: String,
  physicianDate: String,
});

const AdultHealth = new model("AdultHealth", adultHealthSchema);
export { AdultHealth };
