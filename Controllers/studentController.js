import Student from "../Models/student.js";

// Create
export const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json({ message: "Student created successfully", data: student });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read
export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({ message: "Students fetched successfully", data: students });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update
export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedStudent) return res.status(404).json({ message: "Student not found" });
        res.status(200).json({ message: "Student updated successfully", data: updatedStudent });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete
export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudent = await Student.findByIdAndDelete(id);
        if (!deletedStudent) return res.status(404).json({ message: "Student not found" });
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
