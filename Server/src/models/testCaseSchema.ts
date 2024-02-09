import { Schema, model } from "mongoose";

const testCaseSchema = new Schema({
    input: {
        type: String,
        required: true,
    },
    output: {
        type: String,
        required: true,
    },
});

const testCaseModel = model("testcases", testCaseSchema);

export default testCaseModel;
