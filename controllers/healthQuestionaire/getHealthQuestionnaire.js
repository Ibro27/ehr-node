import { HealthQuestionaire } from "../../model/healthQuestionaire.js";

export const GetHealthQuestionnaire = async (req, res) => {
  try {
    const healthQuestRecord = await HealthQuestionaire.find({
      _id: req.params.healthQuestId,
      patientId: req.params.patientId,
    });
    if (!healthQuestRecord)
      throw new Error(
        "Health Questionnaire Record with this patient Id does not exist 🔴"
      );
    res.send(healthQuestRecord);
  } catch (error) {
    console.error(`Something went wrong ${error.message}`);
    res.send(`Something Went Wrong ${error.message}`);
  }
};
