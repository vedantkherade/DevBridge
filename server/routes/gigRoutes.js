import express from "express";

import { createGig, deleteGig, getGig, getGigs } from "../controllers/gigController.js";

import { vertifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", vertifyToken, createGig);

router.delete("/:id", vertifyToken, deleteGig);

router.get("/single/:id", vertifyToken, getGig); 

router.get("/", vertifyToken, getGigs);

export default router;
