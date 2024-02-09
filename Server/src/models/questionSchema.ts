import { Schema, model } from "mongoose";

const questionSchema = new Schema({
    serialNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
    },
    like: {
        type: Number,
        default: 0,
    },
    dislike: {
        type: Number,
        default: 0,
    },
    codeSnippet: [
        {
            type: Schema.Types.ObjectId,
            ref: "snippetModel",
        },
    ],
    testCases: [
        {
            type: Schema.Types.ObjectId,
            red: "testCaseModel",
        },
    ],
});

const questionModel = model("questions", questionSchema);

export default questionModel;
