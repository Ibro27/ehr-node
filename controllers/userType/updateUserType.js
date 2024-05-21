import { UserType } from "../../model/userType.js";

export const UpdateUserType = async (req, res) => {
  try {
    const userType = await UserType.findOne({
      _id: req.params.roleId,
      companyId: req.params.companyId,
    });
    if (!userType) {
      throw new Error("This user type is not found");
    }
    userType.roleName = req.body.roleName || userType.roleName;
    await userType.save();
    res.send(userType);
  } catch (error) {
    res.send(`Unable to update user type ${error.message}`);
  }
};
