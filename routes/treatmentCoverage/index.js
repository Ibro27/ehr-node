import { Router } from "express";
import { CreateCoverage } from "../../controllers/treatmentCoverage/createCoverage.js";
import { GetCoverage } from "../../controllers/treatmentCoverage/getCoverage.js";
import { UpdateCoverage } from "../../controllers/treatmentCoverage/updateCoverage.js";
import { DeleteCoverage } from "../../controllers/treatmentCoverage/deleteCoverage.js";

const router = new Router();

router.post("/", CreateCoverage);
router.get("/:coverageId", GetCoverage);
router.put("/:coverageId", UpdateCoverage);
router.delete("/:coverageId", DeleteCoverage);

export default router;
