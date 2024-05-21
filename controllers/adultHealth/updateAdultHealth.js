import { AdultHealth } from "../../model/adultHealth.js";

export const UpdateAdultHealthRecord = async (req, res) => {
  try {
    const adultHealthRecord = await AdultHealth.findOne({
      _id: req.params.adultHealhId,
    });
    if (!adultHealthRecord) {
      throw new Error("Adult Health Record not found :(");
    }

    adultHealthRecord.date = req.body.date || adultHealthRecord.date;
    adultHealthRecord.dob = req.body.dob || adultHealthRecord.dob;
    adultHealthRecord.name = req.body.name || adultHealthRecord.name;
    adultHealthRecord.seenForToday =
      req.body.seenForToday || adultHealthRecord.seenForToday;
    adultHealthRecord.startBotheringYou =
      req.body.startBotheringYou || adultHealthRecord.startBotheringYou;
    adultHealthRecord.abnormalWeigthLoss =
      req.body.abnormalWeigthLoss || adultHealthRecord.abnormalWeigthLoss;
    adultHealthRecord.abnormalWeigthGain =
      req.body.abnormalWeigthGain || adultHealthRecord.abnormalWeigthGain;
    adultHealthRecord.excessiveFatigue =
      req.body.excessiveFatigue || adultHealthRecord.excessiveFatigue;
    adultHealthRecord.insomnia =
      req.body.insomnia || adultHealthRecord.insomnia;
    adultHealthRecord.gout = req.body.gout || adultHealthRecord.gout;
    adultHealthRecord.rheumaticFever =
      req.body.rheumaticFever || adultHealthRecord.rheumaticFever;
    adultHealthRecord.highCholesterol =
      req.body.highCholesterol || adultHealthRecord.highCholesterol;
    adultHealthRecord.heartAttack =
      req.body.heartAttack || adultHealthRecord.heartAttack;
    adultHealthRecord.highBloodPressure =
      req.body.highBloodPressure || adultHealthRecord.highBloodPressure;
    adultHealthRecord.arthritis =
      req.body.arthritis || adultHealthRecord.arthritis;
    adultHealthRecord.abnormalMammogram =
      req.body.abnormalMammogram || adultHealthRecord.abnormalMammogram;
    adultHealthRecord.pregnancies =
      req.body.pregnancies || adultHealthRecord.pregnancies;
    adultHealthRecord.liveBirths =
      req.body.liveBirths || adultHealthRecord.liveBirths;
    adultHealthRecord.abortions =
      req.body.abortions || adultHealthRecord.abortions;
    adultHealthRecord.anemia = req.body.anemia || adultHealthRecord.anemia;
    adultHealthRecord.cancerTumor =
      req.body.cancerTumor || adultHealthRecord.cancerTumor;
    adultHealthRecord.brokenBones =
      req.body.brokenBones || adultHealthRecord.brokenBones;
    adultHealthRecord.abnormalPapSmear =
      req.body.abnormalPapSmear || adultHealthRecord.abnormalPapSmear;
    adultHealthRecord.contactGlasses =
      req.body.contactGlasses || adultHealthRecord.contactGlasses;
    adultHealthRecord.glaucoma =
      req.body.glaucoma || adultHealthRecord.glaucoma;
    adultHealthRecord.cataracts =
      req.body.cataracts || adultHealthRecord.cataracts;
    adultHealthRecord.diarrheaConstipation =
      req.body.diarrheaConstipation || adultHealthRecord.diarrheaConstipation;
    adultHealthRecord.otherProblemsWithVision =
      req.body.otherProblemsWithVision ||
      adultHealthRecord.otherProblemsWithVision;
    adultHealthRecord.dentures =
      req.body.dentures || adultHealthRecord.dentures;
    adultHealthRecord.dentalProblems =
      req.body.dentalProblems || adultHealthRecord.dentalProblems;
    adultHealthRecord.recurrentScores =
      req.body.recurrentScores || adultHealthRecord.recurrentScores;
    adultHealthRecord.breathingProblems =
      req.body.breathingProblems || adultHealthRecord.breathingProblems;
    adultHealthRecord.freqBronchitis =
      req.body.freqBronchitis || adultHealthRecord.freqBronchitis;
    adultHealthRecord.emphysema =
      req.body.emphysema || adultHealthRecord.emphysema;
    adultHealthRecord.pneumonia =
      req.body.pneumonia || adultHealthRecord.pneumonia;
    adultHealthRecord.asthma = req.body.asthma || adultHealthRecord.asthma;
    adultHealthRecord.hermorrhoids =
      req.body.hermorrhoids || adultHealthRecord.hermorrhoids;
    adultHealthRecord.abdominalPains =
      req.body.abdominalPains || adultHealthRecord.abdominalPains;
    adultHealthRecord.colonPolyp =
      req.body.colonPolyp || adultHealthRecord.colonPolyp;
    adultHealthRecord.angina = req.body.angina || adultHealthRecord.angina;
    adultHealthRecord.freqChestPain =
      req.body.freqChestPain || adultHealthRecord.freqChestPain;
    adultHealthRecord.irregularHeartBeat =
      req.body.irregularHeartBeat || adultHealthRecord.irregularHeartBeat;
    adultHealthRecord.heartMurmur =
      req.body.heartMurmur || adultHealthRecord.heartMurmur;
    adultHealthRecord.rashes = req.body.rashes || adultHealthRecord.rashes;
    adultHealthRecord.hives = req.body.hives || adultHealthRecord.hives;
    adultHealthRecord.moles = req.body.moles || adultHealthRecord.moles;
    adultHealthRecord.seizure = req.body.seizure || adultHealthRecord.seizure;
    adultHealthRecord.stroke = req.body.stroke || adultHealthRecord.stroke;
    adultHealthRecord.urinaryFrequeny =
      req.body.urinaryFrequeny || adultHealthRecord.urinaryFrequeny;
    adultHealthRecord.allergies =
      req.body.allergies || adultHealthRecord.allergies;
    adultHealthRecord.freqSinusInfections =
      req.body.freqSinusInfections || adultHealthRecord.freqSinusInfections;
    adultHealthRecord.bladderInfections =
      req.body.bladderInfections || adultHealthRecord.bladderInfections;
    adultHealthRecord.prostateProblems =
      req.body.prostateProblems || adultHealthRecord.prostateProblems;
    adultHealthRecord.numbness =
      req.body.numbness || adultHealthRecord.numbness;
    adultHealthRecord.weakness =
      req.body.weakness || adultHealthRecord.weakness;
    adultHealthRecord.memoryLoss =
      req.body.memoryLoss || adultHealthRecord.memoryLoss;
    adultHealthRecord.headaches =
      req.body.headaches || adultHealthRecord.headaches;
    adultHealthRecord.hearingLoss =
      req.body.hearingLoss || adultHealthRecord.hearingLoss;
    adultHealthRecord.bloodInStool =
      req.body.bloodInStool || adultHealthRecord.bloodInStool;
    adultHealthRecord.depression =
      req.body.depression || adultHealthRecord.depression;
    adultHealthRecord.anxietyPanic =
      req.body.anxietyPanic || adultHealthRecord.anxietyPanic;
    adultHealthRecord.suicideAttempt =
      req.body.suicideAttempt || adultHealthRecord.suicideAttempt;
    adultHealthRecord.physicalAbuse =
      req.body.physicalAbuse || adultHealthRecord.physicalAbuse;
    adultHealthRecord.sexualAbuse =
      req.body.sexualAbuse || adultHealthRecord.sexualAbuse;
    adultHealthRecord.mentalIllness =
      req.body.mentalIllness || adultHealthRecord.mentalIllness;
    adultHealthRecord.earProblems =
      req.body.earProblems || adultHealthRecord.earProblems;
    adultHealthRecord.ringingInEars =
      req.body.ringingInEars || adultHealthRecord.ringingInEars;
    adultHealthRecord.heartBurn =
      req.body.heartBurn || adultHealthRecord.heartBurn;
    adultHealthRecord.ulcerDisease =
      req.body.ulcerDisease || adultHealthRecord.ulcerDisease;
    adultHealthRecord.gallbladderDisease =
      req.body.gallbladderDisease || adultHealthRecord.gallbladderDisease;
    adultHealthRecord.urinaryIncontinence =
      req.body.urinaryIncontinence || adultHealthRecord.urinaryIncontinence;
    adultHealthRecord.kidneyProblems =
      req.body.kidneyProblems || adultHealthRecord.kidneyProblems;
    adultHealthRecord.diabetes =
      req.body.diabetes || adultHealthRecord.diabetes;
    adultHealthRecord.thyroidDisease =
      req.body.thyroidDisease || adultHealthRecord.thyroidDisease;
    adultHealthRecord.sexTransDiseases =
      req.body.sexTransDiseases || adultHealthRecord.sexTransDiseases;
    adultHealthRecord.expToFamMemWith =
      req.body.expToFamMemWith || adultHealthRecord.expToFamMemWith;
    adultHealthRecord.pastSixMonSigStress =
      req.body.pastSixMonSigStress || adultHealthRecord.pastSixMonSigStress;
    adultHealthRecord.otherMedProblems =
      req.body.otherMedProblems || adultHealthRecord.otherMedProblems;
    adultHealthRecord.suggeryList =
      req.body.suggeryList || adultHealthRecord.suggeryList;
    adultHealthRecord.medAllergiesList =
      req.body.medAllergiesList || adultHealthRecord.medAllergiesList;
    adultHealthRecord.hadLastYear =
      req.body.hadLastYear || adultHealthRecord.hadLastYear;
    adultHealthRecord.tobaccoProducts =
      req.body.tobaccoProducts || adultHealthRecord.tobaccoProducts;
    adultHealthRecord.howMuchSmokePerDay =
      req.body.howMuchSmokePerDay || adultHealthRecord.howMuchSmokePerDay;
    adultHealthRecord.howManyYears =
      req.body.howManyYears || adultHealthRecord.howManyYears;
    adultHealthRecord.wishToQuit =
      req.body.wishToQuit || adultHealthRecord.wishToQuit;
    adultHealthRecord.whenDoYouWishToQuit =
      req.body.whenDoYouWishToQuit || adultHealthRecord.whenDoYouWishToQuit;
    adultHealthRecord.alcoholDrinkWeekly =
      req.body.alcoholDrinkWeekly || adultHealthRecord.alcoholDrinkWeekly;
    adultHealthRecord.problemWithAlcohol =
      req.body.problemWithAlcohol || adultHealthRecord.problemWithAlcohol;
    adultHealthRecord.illicitDrugs =
      req.body.illicitDrugs || adultHealthRecord.illicitDrugs;
    adultHealthRecord.howMuchCaffeineDaily =
      req.body.howMuchCaffeineDaily || adultHealthRecord.howMuchCaffeineDaily;
    adultHealthRecord.sexuallyActive =
      req.body.sexuallyActive || adultHealthRecord.sexuallyActive;
    adultHealthRecord.partners =
      req.body.partners || adultHealthRecord.partners;
    adultHealthRecord.useContraceptives =
      req.body.useContraceptives || adultHealthRecord.useContraceptives;
    adultHealthRecord.practiceSafeSex =
      req.body.practiceSafeSex || adultHealthRecord.practiceSafeSex;
    adultHealthRecord.hadBloodTrans =
      req.body.hadBloodTrans || adultHealthRecord.hadBloodTrans;
    adultHealthRecord.bloodTransYear =
      req.body.bloodTransYear || adultHealthRecord.bloodTransYear;
    adultHealthRecord.maritalStatus =
      req.body.maritalStatus || adultHealthRecord.maritalStatus;
    adultHealthRecord.currently =
      req.body.currently || adultHealthRecord.currently;
    adultHealthRecord.yourOccupation =
      req.body.yourOccupation || adultHealthRecord.yourOccupation;
    adultHealthRecord.historyOfDisease =
      req.body.historyOfDisease || adultHealthRecord.historyOfDisease;
    adultHealthRecord.fatherMedProblems =
      req.body.fatherMedProblems || adultHealthRecord.fatherMedProblems;
    adultHealthRecord.motherMedProblems =
      req.body.motherMedProblems || adultHealthRecord.motherMedProblems;
    adultHealthRecord.kidsMedProblems =
      req.body.kidsMedProblems || adultHealthRecord.kidsMedProblems;
    adultHealthRecord.siblingsMedProblem =
      req.body.siblingsMedProblem || adultHealthRecord.siblingsMedProblem;
    adultHealthRecord.patientSign =
      req.body.patientSign || adultHealthRecord.patientSign;
    adultHealthRecord.patientDate =
      req.body.patientDate || adultHealthRecord.patientDate;
    adultHealthRecord.physicianSign =
      req.body.physicianSign || adultHealthRecord.physicianSign;
    adultHealthRecord.physicianDate =
      req.body.physicianDate || adultHealthRecord.physicianDate;
    await adultHealthRecord.save();
    res.send(adultHealthRecord);
  } catch (error) {
    console.error(`Something Went Wrong ${error.message}`);
    res.send(`Unable to update Adult Health Record ${error.message}`);
  }
};
