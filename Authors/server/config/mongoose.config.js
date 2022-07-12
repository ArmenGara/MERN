const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/Authors",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("Connected to full mern demo DB"))
.catch(err => console.log("Error: ", err))
