import { Company } from "../../model/company.js";

export const GetCompany = async (req, res) => {
  try {
    const company = await Company.find({ hospitalId: req.params.hospitalId });
    if (!company) throw new Error("Company with this id does not exist 🔴");
    res.send(company);
  } catch (error) {
    res.send(`Something Went Wrong ${error.message}`);
  }
};
