const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
})

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100,
        validate: {
            validator: v => v % 2,
            message: props => ` ${props.value} is not an even number`,
        },
    },
    email: {
        type: String,
        minLenngth: 10,
        required: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    bestfriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    adress: addressSchema,
})

module.exports = mongoose.model("User", userSchema)

//15th minute in video https://www.youtube.com/watch?v=DZBGEVgL2eE