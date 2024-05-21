import { Staff } from "../../model/staff.js";
import { hash } from "bcrypt";

export const CreateStaff = async (req, res) => {
  try {
    const { companyId, email, firstName, lastName, roleId } = req.body;
    const allStaffs = await Staff.find();
    const checkStaff = allStaffs.some((staff) => staff.email == email);

    if (checkStaff) {
      throw new Error("A Staff with some of these details already exists");
    }

    const hashedPassword = await hash(email, 10);
    const newStaff = new Staff({
      companyId,
      email,
      firstName,
      password: hashedPassword,
      lastName,
      role: roleId,
    });
    await newStaff.save();
    res.send("New Staff Has being Added successfully");
  } catch (error) {
    res.status(404).send(error.message);
  }
};
