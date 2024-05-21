import { Company } from "../../model/company.js";
import { hash } from "bcrypt";
export const CreateCompany = async (req, res) => {
  console.log("Hitted This!");
  try {
    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      facilityName,
      facilityEmail,
      countryId,
      stateId,
      city,
      zipCode,
    } = req.body;
    const allCompanies = await Company.find();
    const checkCompanyNames = allCompanies.some(
      (company) => company.facilityName == facilityName
    );
    const checkCompanyMails = allCompanies.some(
      (company) => company.email == email
    );
    if (checkCompanyNames || checkCompanyMails) {
      throw new Error("A Company with some of these details already exists 🔴");
    }

    if (password !== confirmPassword) {
      throw new Error("The Password & Confirm Password Does not match");
    }

    const getHospitalId = async () => {
      const checkId = Math.floor(Math.random() * 100) + 1;
      const checkCompanyIds = await Company.findOne({ hospitalId: checkId });

      if (checkCompanyIds) {
        return getHospitalId();
      }
      return checkId;
    };

    const hospitalId = await getHospitalId();
    const hashedPassword = await hash(password, 10);

    const newCompany = new Company({
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      facilityName,
      facilityEmail,
      countryId,
      stateId,
      city,
      zipCode,
      hospitalId,
    });
    await newCompany.save();
    res.send("Company Has being created successfully ✅");
  } catch (error) {
    res.status(404).send(error.message);
  }
};


// Create \F2GJ8