import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
        unique: true,
    },
    email:{
        type:String,
        require:true
    },
    password: {
        type: String,
        require: true,
    },
});
