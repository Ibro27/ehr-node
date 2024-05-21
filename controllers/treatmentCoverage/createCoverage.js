import { Coverage } from "../../model/treatmentCoverage.js";

export const CreateCoverage = async (req, res) => {
  try {
    const {
      patientId,
      selfPatVisit,
      healthInsuredVisit,
      consentMedTreatment,
      noticeOfPrivacyPractice,
      officePolicyOnPayment,
      nameOfSignee,
      todaysVisit,
      signOfParent,
      relToInsured,
      relToPatient,
    } = req.body;
    const checkCoverage = await Coverage.findOne({ patientId });
    if (checkCoverage) {
      throw new Error(`Treatment Coverage For this Patient Already Exists`);
    }
    const newCoverage = new Coverage({
      patientId,
      selfPatVisit,
      healthInsuredVisit,
      consentMedTreatment,
      noticeOfPrivacyPractice,
      officePolicyOnPayment,
      nameOfSignee,
      todaysVisit,
      signOfParent,
      relToInsured,
      relToPatient,
    });
    await newCoverage.save();
  } catch (error) {
    res.status(400).send(`Something Went Wrong ${error.message}`);
  }
};
