import { Patient } from "../../model/patient.js";

export const GetPatient = async (req, res) => {
  try {
    const patient = await Patient.findOne({ _id: req.params.patientId });
    console.log(patient)
    if (!patient) throw new Error("Patient not found");
    res.send(patient);
  } catch (error) {
    res.send(`Unable to get patient ${error.message}`);
  }
};
