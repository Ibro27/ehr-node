import { Staff } from "../../model/staff.js";

export const DeleteStaff = async (req, res) => {
  try {
    const deletedStaff = await Staff.deleteOne({
      _id: req.params.staffId,
    });
    res.send(deletedStaff);
  } catch (err) {
    console.error("Unable to delete staff 🔴", err.message);
    res.status(400).send(err.message);
  }
};
