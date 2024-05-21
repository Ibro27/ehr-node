import { Company } from "../../model/company.js";

export const UpdateCompany = async (req, res) => {
  try {
    const company = await Company.findOne({ _id: req.params.hospitalId });
    if (!company) {
      throw new Error("Company not found :(");
    }
    company.name = req.body.name || company.name;
    company.email = req.body.email || company.email;
    company.country = req.body.company || company.country;
    company.state = req.body.state || company.state;
    company.city = req.body.city || company.city;
    
    await company.save();
    res.send(company);
  } catch (error) {
    res.send(`Unable to update company ${error.message}`);
  }
};
