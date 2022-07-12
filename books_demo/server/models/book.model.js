// 1. IMPORT YOUR DEPENDENCIES
const mongoose = require("mongoose")

const PirateSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true, "REQUIRES PIRATE"]
    },
    picture:{
        type:String,
        required:[true, "Requires Picture"],
        min:[10, "IMAGE TAG MUST HAVE AT LEAST 10 PAGES"],
        max:[1000, "IMAGE TAG MUST HAVE LESS THAN 1000 PAGES"]
    },
    chest:{
        type:Number,
        required:[true, "Requires Chest"]
    },
    catchPhrase:{
        type:String,
        required:[true, "Pirate must have a catch phrase"],
        minLength:[3, "Pirate must have a catch phrase LONGER THAN 3 CHARACTERS"]
    },
    pegEye:{
        type:Boolean,
        required:[true, "pegeye?"]
    },
    eyePatch:{
        type:Boolean,
        required:[true, "eye Patch?"]
    },
    hookHand:{
        type:Boolean,
        required:[true, "hook hand?"]
    },
    crewPosition: {
        type: String,
        enum: ['Captain', 'First Mate', 'Quarter Master', 'Boatswain', 'Powder Monkey'],
        required : true 
    }
}, {timestamps:true})

module.exports = mongoose.model("Pirate", PirateSchema)