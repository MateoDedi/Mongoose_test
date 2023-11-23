const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
})

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    bestfriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    adress: addressSchema,
})

module.exports = mongoose.model("User", userSchema)

//15th minute in video https://www.youtube.com/watch?v=DZBGEVgL2eE