import { Demographics } from "../../model/demographics.js";

export const DeleteDemographics = async (req, res) => {
  try {
    const deletedDemographic = await Demographics.deleteOne({
      patientId: req.params.patientId,
    });
    if (deletedDemographic.deleteCount == 0) {
      throw new Error("Demographics For This User Does not exist");
    }
    res.send(deletedDemographic);
  } catch (err) {
    console.error("Something went wrong 🔴", err.message);
    res.status(400).send(err.message);
  }
};
