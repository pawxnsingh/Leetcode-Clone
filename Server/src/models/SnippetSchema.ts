import { Schema, model } from "mongoose";

const snippetSchema = new Schema({
    language: {
        type: String,
        required: true,
    },
    languageSlug: {
        type: String,
        required: true,
    },
    codeSnippet: {
        type: String,
        required: true,
    },
});

const snippetModel = model("Snippets", snippetSchema);

export default snippetModel;
