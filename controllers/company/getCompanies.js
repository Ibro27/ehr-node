import { Company } from "../../model/company.js";

export const GetCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.send(companies);
  } catch (error) {
    res.send(`Something Went Wrong ${error.message}`);
  }
};
