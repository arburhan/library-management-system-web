import mongoose, { Schema, models } from "mongoose";

// schema design
const userSchema = Schema({
    name: {
        type: String,
        required: [true, "User name must required"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLenght: [100, "Name is too large"],
    },
    email: {
        type: String,
        required: [true, "Email required"],
        unique: [true, "Email must be unique"],
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: String
    },
    role: {
        type: String,
        enum: ["librarian", "student"],
        default: "student"
    }

}, {
    timestamps: true,
})


userSchema.methods.logger = function () {
    console.log(` Data saved for ${this.name}`);
}


// SCHEMA -> MODEL -> QUERY

const User = models.User || mongoose.model("User", userSchema);

module.exports = User;