const Pirate = require("../models/book.model")

module.exports.test = (req, res) => {
    res.json("HELLO WORLD")
}


// CREATE
module.exports.create = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate)) // successful creation
        .catch(err => {
            // console.log(err)
            res.status(400).json(err)
        }) // unsuccessful creation
}

// READ
module.exports.allPirates = (req, res) => {
    Pirate.find()
        .then(allPirates => res.json(allPirates))
        .catch(err => res.json(err))
}

module.exports.onePirate = (req, res) => {
    Pirate.findOne({ _id: req.params.pirate_id })
        .then(onePirate => res.json(onePirate))
        .catch(err => res.status(400).json(err));
};

// UPDATE
module.exports.updatePirate = (req, res) => {
    // findOneAndUpdate takes three arguments, query, payload, boolean
    Pirate.findOneAndUpdate({ _id: req.params.pirate_id }, req.body, { new: true, runValidators: true })
        .then(updatedPirate => res.json(updatedPirate))
        .catch(err => res.status(400).json(err));
};

// DELETE

module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({ _id: req.params.pirate_id })
        .then(result => res.json({ result }))
        .catch(err => res.status(400).json({ err }));
};