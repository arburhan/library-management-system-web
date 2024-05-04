import mongoose, { Schema, models } from "mongoose";

// schema design
const booksSchema = mongoose.Schema({
    bookName: {
        type: String,
        required: [true, "Book name must be required"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large"],
    },
    bookISBN: {
        type: String,
        required: [true, "ISBN required"],
        unique: [true, "ISBN must be unique"],
        maxLength: [100, "ISBN is too large"],
    },
    writerName: {
        type: String,
        required: [true, "Writer required"],
        maxLength: [100, "Writer name is too large"],
    },
    pubName: {
        type: String,
        required: [true, "Publication name required"],
        maxLength: [100, "Publication name is too large"],
    },
    deptName: {
        type: String,
        required: [true, "Department name required"],
        maxLength: [100, "Department name is too large"],
    },
    shelfNum: {
        type: Number,
        required: [true, "Shelf number required"],
    },
    semester: {
        type: Number,
        required: [true, "Semester name required"],
    },
    stock: {
        type: Number,
        required: [true, "Stock required"],
    },
    commonName: {
        type: Boolean,
    },
    image: {
        type: String,
    },
}, {
    timestamps: true,
})



booksSchema.methods.logger = function () {
    console.log(`Data saved for ${this.bookName}`);
}

// SCHEMA -> MODEL -> QUERY

// model creation
let Books;

try {
    Books = mongoose.model('booksScma');
} catch (error) {
    Books = mongoose.model('booksScma', booksSchema);
}

module.exports = Books;
