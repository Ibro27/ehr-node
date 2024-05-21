import { Router } from "express";
import { CreateCompany } from "../../controllers/company/createCompany.js";
import { GetCompanies } from "../../controllers/company/getCompanies.js";
import { GetCompany } from "../../controllers/company/getCompany.js";
import { UpdateCompany } from "../../controllers/company/updateCompany.js";
import { DeleteCompany } from "../../controllers/company/deleteCompany.js";
import { ForgotPassword } from "../../controllers/company/auth/forgotPassword.js";
import { ResetPassword } from "../../controllers/company/auth/resetPassword.js";

const router =  Router();
router.post("/", CreateCompany);
router.get("/", GetCompanies);
router.get("/:hospitalId", GetCompany);
router.put("/:hospitalId", UpdateCompany);
router.delete("/:hospitalId", DeleteCompany);

//AUTH
router.post("/forgot-password", ForgotPassword);
router.post("/reset-password/:id", ResetPassword)
export default router;
