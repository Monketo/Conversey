var db = require('./db');


exports.getTopicsList = function(req, res) {
  res.send(db.retrieveTopics());
};

exports.createUser = function () {

}