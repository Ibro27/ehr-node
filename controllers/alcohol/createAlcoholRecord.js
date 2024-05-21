import { Alcohol } from "../../model/alcohol.js";
export const CreateAlcohol = async (req, res) => {
  try {
    const {
      patientId,
      cutDownDrinking,
      criticizeDrinking,
      guiltyByDrinking,
      drinkCalmNerves,
    } = req.body;
    const allRecords = await Alcohol.find();
    const recordDetails = allRecords.some(
      (record) => record.patientId == patientId
    );
    if (recordDetails) {
      throw new Error("This patient already has alcohol details ");
    }

    const newAlRecord = new Alcohol({
      patientId,
      cutDownDrinking,
      criticizeDrinking,
      guiltyByDrinking,
      drinkCalmNerves,
    });
    await newAlRecord.save();
    res.send("Alcohol Record Has being created successfully ✅");
  } catch (error) {
    res.status(404).send(error.message);
  }
};
