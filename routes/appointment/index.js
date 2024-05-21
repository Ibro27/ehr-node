import { Router } from "express";
import { CreateAppointment } from "../../controllers/appointment/createAppointment.js";
import { GetAppointment } from "../../controllers/appointment/getAppointent.js";
import { UpdateAppointment } from "../../controllers/appointment/updateAppointment.js";
import { DeleteAppointment } from "../../controllers/appointment/deleteAppointment.js";

const router = new Router();

router.post("/", CreateAppointment);
router.get("/:appointmentId/:companyId", GetAppointment);
router.put("/:appointmentId/:companyId", UpdateAppointment);
router.delete("/:appointmentId/:companyId", DeleteAppointment);

export default router;
