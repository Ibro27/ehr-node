import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import Company from "./routes/company/index.js";
import Staff from "./routes/staff/index.js";
import Alcohol from "./routes/alcohol/index.js";
import Patient from "./routes/patient/index.js";
import HealthQuestionaire from "./routes/healthQuestionaire/index.js";
import Demographics from "./routes/demographics/index.js";
import AdultHealth from "./routes/adultHealth/index.js";
import Appointment from "./routes/appointment/index.js";
import TreatmentCoverage from "./routes/treatmentCoverage/index.js";
import UserType from "./routes/userType/index.js";
import cors from "cors";
dotenv.config();
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use("/company", Company);
app.use("/staff", Staff);
app.use("/patient", Patient);
app.use("/alcohol", Alcohol);
app.use("/healthQuestionaire", HealthQuestionaire);
app.use("/demoghraphics", Demographics);
app.use("/adulthHealth", AdultHealth);
app.use("/appointment", Appointment);
app.use("/treatmentCoverage", TreatmentCoverage);
app.use("/userType", UserType);
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.TEST_DB); // Change to main db when done
    console.log(`Database is connected with ${conn.connection.host} :)`);
  } catch (error) {
    console.error("Something went wrong 🔴", error);
    process.exit(1);
  }
};
// connectDB();
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`listening for requests on ${process.env.PORT}`);
  });
});
