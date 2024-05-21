import { Router } from "express";
import { CreateUserType } from "../../controllers/userType/createUserType.js";
import { UpdateUserType } from "../../controllers/userType/updateUserType.js";
import { GetUserType } from "../../controllers/userType/getUserType.js";
import { DeleteUserType } from "../../controllers/userType/deleteUserType.js";

const router = new Router();

router.post("/", CreateUserType);
router.get("/:roleId/:companyId", GetUserType);
router.put("/:roleId/:companyId", UpdateUserType);
router.delete("/:roleId/:companyId", DeleteUserType);

export default router;
