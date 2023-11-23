const mongoose = require('mongoose')
const User = require('./User')

mongoose.connect("mongodb://localhost/testdb")

run()
async function run() {
    try {
        const user = await User.create({ 
            name: "Kyle",
            age: 26,
            email: "TEST@test.com",
            hobbies: ["Weight Lifting", "Bowling"],
            adress: {
                street: "Main St",
            },
        })
        console.log(user)
    } catch (e) {
        console.log(e.message)
    }

/*     const user = new User({name: "Kyle", age: 26})
    await user.save() */

}   

