import { Coverage } from "../../model/treatmentCoverage.js";

export const UpdateCoverage = async (req, res) => {
  try {
    const covergeRecord = await Coverage.findOne({
      _id: req.params.coverageId,
    });
    if (!covergeRecord) {
      throw new Error("Treatment Coverage Record :(");
    }
    covergeRecord.selfPatVisit =
      req.body.selfPatVisit || covergeRecord.selfPatVisit;
    covergeRecord.healthInsuredVisit =
      req.body.healthInsuredVisit || covergeRecord.healthInsuredVisit;
    covergeRecord.consentMedTreatment =
      req.body.consentMedTreatment || covergeRecord.consentMedTreatment;
    covergeRecord.noticeOfPrivacyPractice =
      req.body.noticeOfPrivacyPractice || covergeRecord.noticeOfPrivacyPractice;
    covergeRecord.officePolicyOnPayment =
      req.body.officePolicyOnPayment || covergeRecord.officePolicyOnPayment;
    covergeRecord.nameOfSignee =
      req.body.nameOfSignee || covergeRecord.nameOfSignee;
    covergeRecord.todaysVisit =
      req.body.todaysVisit || covergeRecord.todaysVisit;
    covergeRecord.signOfParent =
      req.body.signOfParent || covergeRecord.signOfParent;
    covergeRecord.relToInsured =
      req.body.relToInsured || covergeRecord.relToInsured;
    covergeRecord.relToPatient =
      req.body.relToPatient || covergeRecord.relToPatient;
    await covergeRecord.save();
    res.send(covergeRecord);
  } catch (error) {
    console.error(`Unable to delete Treatment Coverage Record`);
    res.send(`Unable to update company ${error.message}`);
  }
};
