import { Coverage } from "../../model/treatmentCoverage.js";

export const GetCoverage = async (req, res) => {
  try {
    const coverageRecord = await Coverage.find({ _id: req.params.coverageId });
    if (!coverageRecord) throw new Error("Treatment Coverage Record does not exist 🔴");
    res.send(coverageRecord);
  } catch (error) {
    console.error(`Something Went Wrong ${error.message}`);
    res.send(`Something Went Wrong ${error.message}`);
  }
};
