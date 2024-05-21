import { Staff } from "../../model/staff.js";

export const GetStaff = async (req, res) => {
  try {
    const staff = await Staff.find({ _id: req.params.staffId });
    if (!staff) throw new Error("Staff not found 🔴");
    res.send(staff);
  } catch (error) {
    res.send(`Unable to get staff ${error.message}`);
  }
};
