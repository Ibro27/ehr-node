import { Router } from "express";
import { CreateAlcohol } from "../../controllers/alcohol/createAlcoholRecord.js";
import { GetAlcohol } from "../../controllers/alcohol/getAlcoholRecord.js";
import { UpdateAlcoholRecord } from "../../controllers/alcohol/updateAlcoholRecord.js";
import { DeleteAlcohol } from "../../controllers/alcohol/deleteAlcoholReecord.js";

const router = new Router();

router.post("/", CreateAlcohol);
router.get("/:alcoholId", GetAlcohol);
router.put("/:alcoholId", UpdateAlcoholRecord);
router.delete("/:alcoholId", DeleteAlcohol);

export default router;
