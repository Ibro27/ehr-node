import { Patient } from "../../model/patient.js";

export const UpdatePatient = async (req, res) => {
  const { firstName, lastName, age, address, email, phone } = req.body;
  try {
    const patient = await Patient.findOne({ _id: req.params.patientId });
    if (!patient) {
      throw new Error("Patient not found :(");
    }
    patient.firstName = firstName || patient.firstName;
    patient.lastName = lastName || patient.lastName;
    patient.email = email || patient.email;
    patient.age = age || patient.age;
    patient.address = address || patient.address;
    patient.phone = phone || patient.phone;
    await patient.save();
    res.send(patient);
  } catch (error) {
    res.send(`Unable to update staff ${error.message}`);
  }
};
