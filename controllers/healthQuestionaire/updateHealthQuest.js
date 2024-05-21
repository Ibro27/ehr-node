import { HealthQuestionaire } from "../../model/healthQuestionaire.js";

export const UpdateHealthQuestRecord = async (req, res) => {
  const {_id, patientId} = req.params
  try {
    const healthQuestRecord = await HealthQuestionaire.findOne({
      _id,
      patientId,
    });
    if (!healthQuestRecord) {

      console.log("healthQuestRecord", healthQuestRecord)
      throw new Error("Health Questionnaire Record not found ");
    }

    console.log("healthQuestRecord", healthQuestRecord)
    healthQuestRecord.hospital =
    req.body.hospital || healthQuestRecord.hospital;
    healthQuestRecord.litIntInDoingThings =
      req.body.litIntInDoingThings || healthQuestRecord.litIntInDoingThings;
    healthQuestRecord.feelingDepress =
      req.body.feelingDepress || healthQuestRecord.feelingDepress;
    healthQuestRecord.troubFallAsleep =
      req.body.troubFallAsleep || healthQuestRecord.troubFallAsleep;
    healthQuestRecord.feelingTired =
      req.body.feelingTired || healthQuestRecord.feelingTired;
    healthQuestRecord.poorAppetite =
      req.body.poorAppetite || healthQuestRecord.poorAppetite;
    healthQuestRecord.feelingBadAbtYourself =
      req.body.feelingBadAbtYourself || healthQuestRecord.feelingBadAbtYourself;
    healthQuestRecord.troubConcentrating =
      req.body.troubConcentrating || healthQuestRecord.troubConcentrating;
    healthQuestRecord.movingSpeakingSlowly =
      req.body.movingSpeakingSlowly || healthQuestRecord.movingSpeakingSlowly;
    healthQuestRecord.deadThoughts =
      req.body.deadThoughts || healthQuestRecord.deadThoughts;
    healthQuestRecord.totalScore =
      req.body.totalScore || healthQuestRecord.totalScore;
    healthQuestRecord.howDifficult =
      req.body.howDifficult || healthQuestRecord.howDifficult;
    await healthQuestRecord.save();
    res.send(healthQuestRecord);
  } catch (error) {
    console.error(`Something Went Wrong ${error.message}`);
    res.send(`Unable to update Questionaire ${error.message}`);
  }
};
