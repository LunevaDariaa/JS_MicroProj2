import express from "express";
import { deleteCat } from "../controllers/catController.js";

const router = express.Router();

router.delete("/:id", deleteCat);

export default router;
