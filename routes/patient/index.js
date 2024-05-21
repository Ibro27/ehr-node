import { Router } from "express";
import { CreatePatient } from "../../controllers/patient/createPatient.js";
import { GetPatient } from "../../controllers/patient/getPatient.js";
import { UpdatePatient } from "../../controllers/patient/updatePatient.js";
import { DeletePatient } from "../../controllers/patient/deletePatient.js";
import { GetPatientsByCompany } from "../../controllers/patient/getPatientsByCompany.js";
import { GetCompanyByPatientId } from "../../controllers/patient/getCompanyByPatientId.js";
import { RegisterWithCompany } from "../../controllers/patient/registerWithCompany.js";
import { UnregisterWithCompany } from "../../controllers/patient/unregisterWithCompany.js";


const router = new Router();

router.post("/", CreatePatient);
router.get("/:patientId", GetPatient);
router.put("/:patientId", UpdatePatient);
router.delete("/:patientId", DeletePatient);
router.get("/company/:companyId", GetPatientsByCompany);
router.get("/patient/:patientId", GetCompanyByPatientId);
router.post('/patient/register/:companyId', RegisterWithCompany);
router.delete('/:patientId/unregister/:companyId', UnregisterWithCompany);
export default router;
 