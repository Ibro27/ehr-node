import { Alcohol } from "../../model/alcohol.js";

export const GetAlcohol = async (req, res) => {
  try {
    const alcoholRecord = await Alcohol.find({ _id: req.params.alcoholId });
    if (!alcoholRecord)
      throw new Error("Alcohol Record does not exist 🔴");
    res.send(alcoholRecord);
  } catch (error) {
    res.send(`Something Went Wrong ${error.message}`);
  }
};
