const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
	Joke.find()
	    .then(allJokes => res.json({jokes: allJokes}))
			.catch(err => res.json({message: "oops",
				                      error: err}));
};


module.exports.findOneJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
	    .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
			.catch(err => res.json({ message: "error there", error: err}));
}

module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then((joke) => res.json({ joke: joke }))
    .catch((error) => res.json({ message: "huh no create", error: error }));
};

module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((joke) => res.json({ joke: joke }))
    .catch((error) => res.json({ message: "not updated!", error: error }));
};

module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((error) => res.json({ message: "not deleted!!!!", error: error }));
};

