import { Alcohol } from "../../model/alcohol.js";

export const UpdateAlcoholRecord = async (req, res) => {
  try {
    const alcoholRecord = await Alcohol.findOne({ _id: req.params.alcoholId });
    if (!alcoholRecord) {
      throw new Error("Alcohol Record not found :(");
    }
    alcoholRecord.cutDownDrinking =
      req.body.cutDownDrinking || alcoholRecord.cutDownDrinking;
    alcoholRecord.criticizeDrinking =
      req.body.criticizeDrinking || alcoholRecord.criticizeDrinking;
    alcoholRecord.guiltyByDrinking =
      req.body.guiltyByDrinking || alcoholRecord.guiltyByDrinking;
    alcoholRecord.drinkCalmNerves =
      req.body.drinkCalmNerves || alcoholRecord.drinkCalmNerves;

    await alcoholRecord.save();
    res.send(alcoholRecord);
  } catch (error) {
    res.send(`Unable to update company ${error.message}`);
  }
};
