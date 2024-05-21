import { UserType } from "../../model/userType.js";

export const DeleteUserType = async (req, res) => {
  try {
    const deletedUserType = await UserType.deleteOne({
      _id: req.params.roleId,
      companyId: req.params.companyId,
    });
    if (deletedUserType.deleteCount == 0) {
      throw new Error("Please Check your parameters");
    }
    res.send(deletedUserType);
  } catch (err) {
    console.error("Unable to delete 🔴", err.message);
    res.status(400).send(err.message);
  }
};
