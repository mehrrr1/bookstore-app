import express from "express";
import { getBooks, addBook, getBookById } from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getBooks);
router.post("/", addBook); // admin only in frontend check
router.get("/:id", getBookById);

export default router;
