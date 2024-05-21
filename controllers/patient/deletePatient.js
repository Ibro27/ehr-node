import { Patient } from "../../model/patient.js";

export const DeletePatient = async (req, res) => {
  try {
    const deletedPatient = await Patient.deleteOne({
      _id: req.params.patientId,
    });
    res.send(deletedPatient);
  } catch (err) {
    console.error("Something went wrong 🔴", err.message);
    res.status(400).send(err.message);
  }
};
