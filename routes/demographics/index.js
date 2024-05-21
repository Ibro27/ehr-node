import { Router } from "express";
import { CreateDemographics } from "../../controllers/demographics/createDemographics.js";
import { GetDemographics } from "../../controllers/demographics/getDemographicsRecord.js";
import { UpdateDemographicsRecord } from "../../controllers/demographics/updateDemographics.js";
import { DeleteUserType } from "../../controllers/userType/deleteUserType.js";

const router = new Router();

router.post("/", CreateDemographics);
router.get("/:patientId", GetDemographics);
router.put("/:patientId", UpdateDemographicsRecord);
router.delete("/:patientId", DeleteUserType);

export default router;
