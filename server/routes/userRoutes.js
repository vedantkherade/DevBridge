import express from "express";
import { deleteUser, getUser } from "../controllers/userController.js";
import { vertifyToken } from "../middleware/jwt.js";



const router = express.Router();

router.delete("/:id",vertifyToken, deleteUser);
router.get("/:id",vertifyToken, getUser);



export default router;