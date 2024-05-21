import { Router } from "express";
import { CreateStaff } from "../../controllers/staff/createStaff.js";
import { GetStaff } from "../../controllers/staff/getStaff.js";
import { UpdateStaff } from "../../controllers/staff/updateStaff.js";
import { DeleteStaff } from "../../controllers/staff/deleteStaff.js";
import { GetStaffsByCompany } from "../../controllers/staff/getStaffsByCompany.js";

const router = new Router();

router.post("/", CreateStaff);
router.get("/:staffId", GetStaff);
router.put("/:staffId", UpdateStaff);
router.delete("/:staffId", DeleteStaff);
router.get("/:companyId", GetStaffsByCompany);

export default router;
