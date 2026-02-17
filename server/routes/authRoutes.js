import express from "express";
import { register, login, logout, forgetPassword, resetPassword} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.post("/forget-password", forgetPassword);
router.post("/reset-password", resetPassword);


export default router;