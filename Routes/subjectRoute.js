
import express from "express";
import { createSubject, getSubjects,updateSubject,deleteSubject, } from "../Controllers/subjectController.js";


const router = express.Router();

// Subjects Routes
router.post("/subjects", createSubject);
router.get("/subjects", getSubjects);
router.put("/subjects/:id", updateSubject);
router.delete("/subjects/:id", deleteSubject);

export default router;
