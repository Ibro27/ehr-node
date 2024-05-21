import { Coverage } from "../../model/treatmentCoverage.js";

export const DeleteCoverage = async (req, res) => {
  try {
    const deletedCoverage = await Coverage.deleteOne({
      _id: req.params.coverageId,
    });
    if (deletedCoverage.deleteCount == 0) {
      throw new Error("Treatmentt Coverage record was not found");
    }
    res.send(deletedCoverage);
  } catch (err) {                         
    console.error(`Something went wrong 🔴 ${err.message}`);
    res.status(400).send(`Unable to delete Treatment Coverage Record ${err.message}`);
  }
};
