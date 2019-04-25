var db = require('./db');
var rooms = require('./room_data');

var RoomsData = rooms.Rooms;

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
  db.retrieveQuestionsByTopic(req.body.topic_name).then(function(results){
  	  res.send({questions: results})
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

exports.addRoom = function(req, res) {
  rooms.addRoom(req.body);
  res.sendStatus(200);
}

exports.getRoomData = function(req, res) {
  var roomId = req.query.roomId;
  if (!roomId || !(roomId in RoomsData)){
		res.sendStatus(404);
  }
  var roomData = {
  	topic: RoomsData[roomId].topic,
  	questions: RoomsData[roomId].questions_list
  }
  res.send(roomData);
}
// exports.createUser = function () {

// }