import { Schema, model } from "mongoose";

// @ts-ignore
const companySchema = Schema({
  email: {
    type: String,
    required: [true, "Please Enter Hospital Name"],
  },
  firstName: {
    type: String,
    required: [true, "Please Enter Hospital Admin First Name"],
  },
  lastName: {
    type: String,
    required: [true, "Please Enter Hospital Admin First Name"],
  },
  facilityName: {
    type: String,
    required: [true, "Please Enter Hospital Name"],
  },
  verified: Boolean,
  facilityEmail: {
    type: String,
    required: [true, "Please Enter Hospital Email"],
  },
  countryId: {
    type: Number,
    required: [true, "Please Enter Hospital Country Id"],
  },
  stateId: {
    type: Number,
    required: [true, "Please Enter Hospital State Id"],
  },
  city: {
    type: String,
    required: [true, "Please Enter Hospital City"],
  },
  zipCode: {
    type: String,
    required: [true, "Please Enter Hospital Zip Code"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Hospital Password"],
  },
  hospitalId: {
    type: String,
    required: [true, "Please Enter HospitalId"],
  },
  newPassword: {
    type: String,
    required: [true, "Please Enter Hospital's New Password"],
  },
});

const Company =  model("Company", companySchema);
export { Company };
