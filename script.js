const mongoose = require('mongoose')
const User = require('./User')

mongoose.connect("mongodb://127.0.0.1:27017/testdb")

run()
async function run() {
    try {
        const user = await User.find({ name: "Kyle"})
        console.log(user)
    } catch (e) {
        console.log(e.message)
    }
}   

