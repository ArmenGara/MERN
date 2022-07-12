const mongoose = require("mongoose")

const AuthorSchema = mongoose.Schema({
    author:{
        type: String
    }
}, {timestamps:true})

module.exports = mongoose.model("Author", AuthorSchema)