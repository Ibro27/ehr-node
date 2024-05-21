import { HealthQuestionaire } from "../../model/healthQuestionaire.js";

export const CreateHealthQuestionaire = async (req, res) => {
  try {
    const {
      patientId,
      hospital,
      litIntInDoingThings,
      feelingDepress,
      troubFallAsleep,
      feelingTired,
      poorAppetite,
      feelingBadAbtYourself,
      troubConcentrating,
      movingSpeakingSlowly,
      deadThoughts,
      totalScore,
      howDifficult,
    } = req.body;
    const checkRecordExists = await HealthQuestionaire.findOne({patientId, hospital});
    if (checkRecordExists) {
      throw new Error("This Patient Already Has a Health Questionnaire Record");
    }
    const newHealthQuestionaire = new HealthQuestionaire({
      patientId ,
      hospital,
      litIntInDoingThings,
      feelingDepress,
      troubFallAsleep,
      feelingTired,
      poorAppetite,
      feelingBadAbtYourself,
      troubConcentrating,
      movingSpeakingSlowly,
      deadThoughts,
      totalScore,
      howDifficult,
    });
    const result = await newHealthQuestionaire.save();
    res.status(201).send({
      status : true,
      data : result
    });
  } catch (error){
    console.log("error", error)
    res.send (`Unable to create a questionaire ${error.message}`);
   }
 
};
