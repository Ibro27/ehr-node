import { Schema, model } from "mongoose";

const patientSchema = Schema({
  companyId: [{
    type: Schema.Types.ObjectId,
    ref: "company",
    
  }],
  firstName: String,
  lastName: String,
  age: String,
  address: String,
  email: String,
  phone: String,
  password: String,
});

const Patient = new model("Patient", patientSchema);
export { Patient };
