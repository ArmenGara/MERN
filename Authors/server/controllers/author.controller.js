// IMPORT IN THE MODEL
const {Author} = require("../models/author.models")


module.exports.test = (req, res) => {
    res.json("hello world")
}

// CREATE
module.exports.create =  (req,res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor)) // successful creation
        .catch(err => {
            // console.log(err)
            res.status(400).json(err)
        }) // unsuccessful creation
}


// READ
module.exports.allAuthors = (req,res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json(err))
}
module.exports.oneAuthor = (req, res) => {
	Author.findOne({ _id: req.params.author_id })
		.then(oneAuthor => res.json(oneAuthor))
		.catch(err => res.status(400).json(err));
};
// UPDATE


// DELETE


