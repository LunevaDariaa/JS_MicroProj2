import express from "express";
import { getAllCats, getCatById } from "../controllers/catController.js";

const router = express.Router();

// Get all cats
router.get("/", getAllCats);

// Get a single cat by ID
router.get("/:id", getCatById);

export default router;
