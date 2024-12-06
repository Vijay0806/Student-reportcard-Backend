
import express from "express";
import { createMarks, getMarks,updateMarks,deleteMarks, } from "../Controllers/marksController.js";

const router = express.Router();

router.post("/marks", createMarks);
router.get("/marks", getMarks);
router.put("/marks/:id", updateMarks);
router.delete("/marks/:id", deleteMarks);

export default router;
