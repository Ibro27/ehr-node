import { Patient } from "../../model/patient.js";
import { hash } from "bcrypt";
export const CreatePatient = async (req, res) => {
  try {
    const { companyId, firstName, lastName, age, address, email, phone } =
      req.body;
    const allPatients = await Patient.find();
    const checkPatient = allPatients.some((patient) => patient.email == email);

    if (checkPatient) {
      throw new Error("A Patient with some of these details already exists");
    }
    let hashedPassword;
    if (companyId) {
      hashedPassword = await hash(email, 10);
    } else {
      hashedPassword = await hash(password, 10);
    }
    const newPatient = new Patient({
      companyId,
      email,
      firstName,
      lastName,
      age,
      address,
      phone,
      password: hashedPassword,
    });
    await newPatient.save();
    res.send("New Patient Created Successfully ✅");
  } catch (error) {
    res.status(404).send(error.message);
  }
};
