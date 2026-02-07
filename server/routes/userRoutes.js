import express from "express";
import { deleteUser } from "../controllers/userController.js";
import { vertifyToken } from "../middleware/jwt.js";



const router = express.Router();

router.delete("/:id",vertifyToken, deleteUser);



export default router;