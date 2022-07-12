const mongoose = require("mongoose")


// CREATE THE SCHEMA
const RecipeSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name must be provided"]
    }
}, {timestamps:true})


// REGISTER THE SCHEMA IN MONGOOSE
module.exports.Recipe = mongoose.model("Recipe", RecipeSchema)
