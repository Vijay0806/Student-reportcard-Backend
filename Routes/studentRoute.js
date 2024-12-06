
import express from "express";
import { createStudent, getStudents ,updateStudent,deleteStudent,} from "../Controllers/studentController.js";



const router = express.Router();

// Students Routes
router.post("/students", createStudent);
router.get("/students", getStudents);
router.put("/students/:id", updateStudent);
router.delete("/students/:id", deleteStudent);


export default router;
