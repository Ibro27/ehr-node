import { AdultHealth } from "../../model/adultHealth.js";

export const DeleteAdultHealth = async (req, res) => {
  try {
    const deletedAdultHealth = await AdultHealth.deleteOne({
      _id: req.params.adultHealthId,
    });
    if (deletedAdultHealth.deleteCount == 0) {
      throw new Error("Unable to find Adult Health Record");
    }
    res.send(deletedAdultHealth);
  } catch (err) {
    console.error("Something went wrong 🔴", err.message);
    res.status(400).send(`Deleted Adult Health${err.message}`);
  }
};
