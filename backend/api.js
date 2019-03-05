var db = require('./db');

exports.getTopicsList = function(req, res) {
    var query = db.retrieveTopics();
	query.exec(function(err, docs) {
		if (!err){
		  var results = Array();
		  docs.forEach(function(doc){
		  	results.push(doc.title);
		  })
		  res.send({topics: results});
		} else {
			console.err("Error! Topics couldn't be retrieved.");
		}
	});
};

exports.getQuestionsByTopic = function(req, res) {
  var query = db.retrieveQuestionsByTopic(req.body.topic_name);
  query.exec(function(err, docs) {
    	if (!err){
		  var results = Array();
		  docs.forEach(function(doc){
		  	results.push(doc.question);
		  })
		  res.send({questions: results});
    	} else {
    		console.err("Error! Topics couldn't be retrieved.");
    	}
    });
};

exports.addNewQuestion = function(req, res) {
  db.addNewQuestion(req.body.topic_name, req.body.question);
  res.sendStatus(200);
};

exports.addNewTopic = function(req, res) {
  db.addNewTopic(req.body.topic_name);
  res.sendStatus(200);
};

exports.createUser = function () {

}