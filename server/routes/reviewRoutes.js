import express from "express";
import { vertifyToken } from "../middleware/jwt";

import { createReview, deleteReview, getReviews } from "../controllers/reviewController.js";


const router = express.Router();

router.post("/",vertifyToken , createReview);
router.get("/:gigId", getReviews);
router.delete("/:id", deleteReview);




export default router;