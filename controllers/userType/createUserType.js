import { UserType } from "../../model/userType.js";

export const CreateUserType = async (req, res) => {
  try {
    const { roleName, companyId } = req.body;
    const roleNames = UserType.find({ companyId });
    const isRolPresent = roleNames.some((role) => role.roleName == roleName);
    if (isRolPresent) {
      throw new Error("The Role for this company already exists");
    }
    const newRole = new UserType({
      companyId,
      roleName,
    });
    await newRole.save();
    res.send(newRole);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
