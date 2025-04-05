import express from "express";
import { updateCat } from "../controllers/catController.js";

const router = express.Router();

// Update a cat's information by ID
router.put("/:id", updateCat);

export default router;
