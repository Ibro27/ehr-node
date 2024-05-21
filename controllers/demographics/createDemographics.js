import { Demographics } from "../../model/demographics.js";

export const CreateDemographics = async (req, res) => {
  try {
    const {
      patientId,
      firstName,
      lastName,
      city,
      state,
      dob,
      gender,
      zipCode,
      phone,
      email,
      bestFormContact,
      leaveVoiceMessage,
      prefferedPharmacy,
      address,
      apt,
      emergencyContact,
      relationship,
      howHeardAbtClinic,
      finFirstName,
      finLastName,
      finCity,
      finState,
      finZipcode,
      finRelationship,
      finAddress,
      finApt,
      finHomePhone,
      finCellPhone,
      finNameOfPry,
      finNameOfSec,
      finPrySubNo,
      finSecSubNo,
      finParentSign,
      finDate,
    } = req.body;

    const recordExists = await Demographics.findOne({ patientId });
    if (recordExists) {
      throw new Error("This Demographics Record Already Exists");
    }
    const newPatientDemographics = new Demographics({
      patientId,
      firstName,
      lastName,
      city,
      state,
      dob,
      gender,
      zipCode,
      phone,
      email,
      bestFormContact,
      leaveVoiceMessage,
      prefferedPharmacy,
      address,
      apt,
      emergencyContact,
      relationship,
      howHeardAbtClinic,
      finFirstName,
      finLastName,
      finCity,
      finState,
      finZipcode,
      finRelationship,
      finAddress,
      finApt,
      finHomePhone,
      finCellPhone,
      finNameOfPry,
      finNameOfSec,
      finPrySubNo,
      finSecSubNo,
      finParentSign,
      finDate,
    });

    await newPatientDemographics.save();
  } catch (error) {
    console.error(`Unable to create demographics ${error.message}`);
  }
};
