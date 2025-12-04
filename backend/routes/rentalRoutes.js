import express from "express";
import { createRental } from "../controllers/rentalController.js";

const router = express.Router();

router.post("/", createRental);

export default router;
