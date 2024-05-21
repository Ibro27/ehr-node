import { UserType } from "../../model/userType.js";

export const GetUserType = async (req, res) => {
  try {
    const userType = await UserType.findOne({
      _id: req.params.roleId,
      companyId: req.params.companyId,
    });
    if (!userType) throw new Error("User Type does not exist 🔴");
    res.send(userType);
  } catch (error) {
    res.send(`Something Went Wrong ${error.message}`);
  }
};
