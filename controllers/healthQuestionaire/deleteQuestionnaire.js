import { HealthQuestionaire } from "../../model/healthQuestionaire.js";

export const DeleteHealthQuestionnaire = async (req, res) => {
  const {_id} = req.params
  try {
    const deletedHealthQuestionnaire = await HealthQuestionaire.deleteOne({_id});
    if (deletedHealthQuestionnaire.deleteCount == 0) {
      throw new Error(
        "Health Questionnaire Details with this patient id was not found"
      );
    }
    res.send(deletedHealthQuestionnaire);
  } catch (err) {
    console.error(`Something went wrong 🔴 ${err.message}`);
    res.status(400).send(err.message);
  }
};
