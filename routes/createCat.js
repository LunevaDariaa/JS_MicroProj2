import express from "express";
import { createCat } from "../controllers/catController.js";

const router = express.Router();

router.post("/", createCat);

export default router;
