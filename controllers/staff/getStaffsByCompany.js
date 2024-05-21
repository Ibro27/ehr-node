import { Staff } from "../../model/staff.js";

export const GetStaffsByCompany = async (req, res) => {
  try {
    const staffs = await Staff.find({ companyId: req.params.companyId });
    res.send(staffs);
  } catch (error) {
    res.send(`Something Went Wrong ${error.message}`);
  }
};
