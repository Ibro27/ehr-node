import { Patient } from "../../model/patient.js";

export const GetPatientsByCompany = async (req, res) => {
  try {
    const patients = await Patient.find({ companyId: req.params.companyId });
    res.send(patients);
  } catch (error) {
    res.send(`Something Went Wrong ${error.message}`);
  }
};
