import { AdultHealth } from "../../model/adultHealth.js";

export const GetAdultHealth = async (req, res) => {
  try {
    const adultHealthRecord = await AdultHealth.find({
      _id: req.params.adultHealthId,
    });
    if (!adultHealthRecord) throw new Error("Adult Health record not found");
    res.send(adultHealthRecord);
  } catch (error) {
    console.error(`Something Went Wrong ${error.message}`);
    res.send(`Something Went Wrong ${error.message}`);
  }
};
