import { Demographics } from "../../model/demographics.js";

export const UpdateDemographicsRecord = async (req, res) => {
  try {
    const demographicsRecord = await Demographics.findOne({
      patientId: req.params.patientId,
    });
    if (!demographicsRecord) {
      throw new Error("Demographics Record with this patient Id was not found :(");
    }
    demographicsRecord.firstName =
      req.body.firstName || demographicsRecord.firstName;
    demographicsRecord.lastName =
      req.body.lastName || demographicsRecord.lastName;
    demographicsRecord.city = req.body.city || demographicsRecord.city;
    demographicsRecord.state = req.body.state || demographicsRecord.state;
    demographicsRecord.dob = req.body.dob || demographicsRecord.dob;
    demographicsRecord.gender = req.body.gender || demographicsRecord.gender;
    demographicsRecord.zipCode = req.body.zipCode || demographicsRecord.zipCode;
    demographicsRecord.phone = req.body.phone || demographicsRecord.phone;
    demographicsRecord.email = req.body.email || demographicsRecord.email;
    demographicsRecord.bestFormContact =
      req.body.bestFormContact || demographicsRecord.bestFormContact;
    demographicsRecord.leaveVoiceMessage =
      req.body.leaveVoiceMessage || demographicsRecord.leaveVoiceMessage;
    demographicsRecord.prefferedPharmacy =
      req.body.prefferedPharmacy || demographicsRecord.prefferedPharmacy;
    demographicsRecord.address = req.body.address || demographicsRecord.address;
    demographicsRecord.apt = req.body.apt || demographicsRecord.apt;
    demographicsRecord.emergencyContact =
      req.body.emergencyContact || demographicsRecord.emergencyContact;
    demographicsRecord.relationship =
      req.body.relationship || demographicsRecord.relationship;
    demographicsRecord.howHeardAbtClinic =
      req.body.howHeardAbtClinic || demographicsRecord.howHeardAbtClinic;
    demographicsRecord.finFirstName =
      req.body.finFirstName || demographicsRecord.finFirstName;
    demographicsRecord.finLastName =
      req.body.finLastName || demographicsRecord.finLastName;
    demographicsRecord.finCity = req.body.finCity || demographicsRecord.finCity;
    demographicsRecord.finState =
      req.body.finState || demographicsRecord.finState;
    demographicsRecord.finZipcode =
      req.body.finZipcode || demographicsRecord.finZipcode;
    demographicsRecord.finRelationship =
      req.body.finRelationship || demographicsRecord.finRelationship;
    demographicsRecord.finAddress =
      req.body.finAddress || demographicsRecord.finAddress;
    demographicsRecord.finApt = req.body.finApt || demographicsRecord.finApt;
    demographicsRecord.finHomePhone =
      req.body.finHomePhone || demographicsRecord.finHomePhone;
    demographicsRecord.finCellPhone =
      req.body.finCellPhone || demographicsRecord.finCellPhone;
    demographicsRecord.finNameOfPry =
      req.body.finNameOfPry || demographicsRecord.finNameOfPry;
    demographicsRecord.finNameOfSec =
      req.body.finNameOfSec || demographicsRecord.finNameOfSec;
    demographicsRecord.finPrySubNo =
      req.body.finPrySubNo || demographicsRecord.finPrySubNo;
    demographicsRecord.finSecSubNo =
      req.body.finSecSubNo || demographicsRecord.finSecSubNo;
    demographicsRecord.finParentSign =
      req.body.finParentSign || demographicsRecord.finParentSign;
    demographicsRecord.finDate = req.body.finDate || demographicsRecord.finDate;
    await demographicsRecord.save();
    res.send(demographicsRecord);
  } catch (error) {
    res.send(`Unable to update company ${error.message}`);
  }
};
