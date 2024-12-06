
import mongoose from "mongoose";

const marksSchema = new mongoose.Schema({

    marks: {
        type: Number,
        required: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "student", // Case-sensitive
        required: true
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "subject",
        required: true
    },
})

const Marks = mongoose.model("marks", marksSchema);
export default Marks;
