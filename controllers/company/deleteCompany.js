import { Company } from "../../model/company.js";

export const DeleteCompany = async (req, res) => {
  try {
    const deletedCompany = await Company.deleteOne({
      _id: req.params.hospitalId,
    });
    res.send(deletedCompany);
  } catch (err) {
    console.error("Something went wrong 🔴", err.message);
    res.status(400).send(err.message);
  }
};
