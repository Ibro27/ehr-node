import { Staff } from "../../model/staff.js";

export const UpdateStaff = async (req, res) => {
  const { firstName, lastName, email, role } = req.body;
  try {
    const staff = await Staff.findOne({ _id: req.params.staffId });
    if (!staff) {
      throw new Error("Staff not found :(");
    }
    staff.firstName = firstName || staff.firstName;
    staff.lastName = lastName || staff.lastName;
    staff.email = email || staff.email;
    company.role = role || staff.role;
    await staff.save();
    res.send(staff);
  } catch (error) {
    res.send(`Unable to update staff ${error.message}`);
  }
};
