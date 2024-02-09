import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    email: {
        type: String,
        required: true,
    },
    // this is for the "login with google"
    googleId: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    // this represents the user cloudinaryId
    image: {
        type: String,
    },
});

const userModel = model("user", userSchema);

export default userModel;
