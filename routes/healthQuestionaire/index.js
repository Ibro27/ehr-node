import { Router } from "express";
import { CreateHealthQuestionaire } from "../../controllers/healthQuestionaire/createQuestioaire.js";
import { GetHealthQuestionnaire } from "../../controllers/healthQuestionaire/getHealthQuestionnaire.js";
import { UpdateHealthQuestRecord } from "../../controllers/healthQuestionaire/updateHealthQuest.js";
import { DeleteHealthQuestionnaire } from "../../controllers/healthQuestionaire/deleteQuestionnaire.js";

const router = new Router();

router.post("/", CreateHealthQuestionaire);
router.get("/:healthQuestId/:patientId", GetHealthQuestionnaire);
router.patch("/:_id/:patientId", UpdateHealthQuestRecord);
router.delete("/:_id", DeleteHealthQuestionnaire);

export default router;
