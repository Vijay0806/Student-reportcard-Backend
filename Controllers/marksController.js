import Marks from "../Models/marks.js";

// Create
export const createMarks = async (req, res) => {
    try {
        const marks = new Marks(req.body);
        await marks.save();
        res.status(201).json({ message: "Marks created successfully", data: marks });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read
export const getMarks = async (req, res) => {
    try {
        const marks = await Marks.find().populate("student", "name").populate("subject", "name");
        res.status(200).json({ message: "Marks fetched successfully", data: marks });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// export const getMarks = async (req, res) => {
//     try {
//         const marks = await Marks.find()
//             .populate("student", "name") // Matches "ref: student"
//             .populate("subject", "name"); // Matches "ref: subject"
//         res.status(200).json({ message: "Marks fetched successfully", data: marks });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };



// Update
export const updateMarks = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedMarks = await Marks.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedMarks) return res.status(404).json({ message: "Marks not found" });
        res.status(200).json({ message: "Marks updated successfully", data: updatedMarks });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete
export const deleteMarks = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMarks = await Marks.findByIdAndDelete(id);
        if (!deletedMarks) return res.status(404).json({ message: "Marks not found" });
        res.status(200).json({ message: "Marks deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
