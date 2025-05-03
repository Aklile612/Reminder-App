import mongoose, { Schema } from "mongoose";

const calendarSchema = new Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    remindertime: {
        type: Date,
        required: true
    },
    quiz: {
        type: Date
    },
    assignment: {
        type: Date
    },
    mid: {
        type: Date
    },
    final: {
        type: Date
    }
}, {
    timestamps: true 
});

const Calendar = mongoose.model("Calendar", calendarSchema);

export default Calendar;
