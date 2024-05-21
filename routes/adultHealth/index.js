import { Router } from "express";
import { CreateAdultHealth } from "../../controllers/adultHealth/createAdultHealth.js";
import { GetAdultHealth } from "../../controllers/adultHealth/getAdultHealth.js";
import { UpdateAdultHealthRecord } from "../../controllers/adultHealth/updateAdultHealth.js";
import { DeleteAdultHealth } from "../../controllers/adultHealth/deleteAdultHealth.js";

const router = new Router();

router.post("/", CreateAdultHealth);
router.get("/:adultHealthId", GetAdultHealth);
router.put("/:adultHealthId", UpdateAdultHealthRecord);
router.delete("/:adultHealthId", DeleteAdultHealth);

export default router;
