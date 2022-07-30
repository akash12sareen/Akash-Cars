const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://AKASH12SAREEN:IAMGREAT123@cluster0.hmh9d.mongodb.net/akashcars' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose