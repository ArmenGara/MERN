const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	name:{
		type: String,
		require: [true, 'Fun Jose.']
	},
	joke:{
		type: String,
		require: [true, 'This is a fun joke.']
	}
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;