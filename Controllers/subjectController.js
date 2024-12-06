import Subject from "../Models/subject.js";

// Create
export const createSubject = async (req, res) => {
    try {
        const subject = new Subject(req.body);
        await subject.save();
        res.status(201).json({ message: "Subject created successfully", data: subject });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read
export const getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.status(200).json({ message: "Subjects fetched successfully", data: subjects });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update
export const updateSubject = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSubject = await Subject.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedSubject) return res.status(404).json({ message: "Subject not found" });
        res.status(200).json({ message: "Subject updated successfully", data: updatedSubject });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete
export const deleteSubject = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSubject = await Subject.findByIdAndDelete(id);
        if (!deletedSubject) return res.status(404).json({ message: "Subject not found" });
        res.status(200).json({ message: "Subject deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
