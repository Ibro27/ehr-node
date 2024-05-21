import { Demographics } from "../../model/demographics.js";

export const GetDemographics = async (req, res) => {
  try {
    const demographicsRecord = await Demographics.find({
      patientId: req.params.patientId,
    });
    if (!demographicsRecord)
      throw new Error("Demographics Record does not exist 🔴");
    res.send(demographicsRecord);
  } catch (error) {
    res.send(`Something Went Wrong ${error.message}`);
  }
};
