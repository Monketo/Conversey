var bcrypt = require('bcryptjs');

var mongo = require('mongoose');
mongo.connect('mongodb://localhost:27017/Conversey', {
  useMongoClient: true
});
var db = mongo.connection;
db.on('error',	function	(err)	{
  console.log('connection	error:',	err.message);
});
db.once('open',	function	callback	()	{
  console.log("Connected to DB!");
});

var UserSchema = new mongo.Schema({
  email : {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: String
});

var TopicSchema = new mongo.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    trim: true
  }
});

var Topic = mongo.model('Topic', TopicSchema);
var User = mongo.model('User',	UserSchema);

var QuestionSchema = new mongo.Schema({
  question: {
  	type: String,
  	unique: true,
  	required: true,
  	trim: true
  },
  topic: {type: mongo.Schema.Types.ObjectId, ref: 'Topic'},
  creator:{type: mongo.Schema.Types.ObjectId, ref: 'User'},
  rate: Number
});
var Question = mongo.model('Question', QuestionSchema);


UserSchema.statics.authenticate = function (email, password, callback) {
  User.findOne({ email: email })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
}

function requiresLogin(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  } else {
    var err = new Error('You must be logged in to view this page.');
    err.status = 401;
    return next(err);
  }
}

function addNewTopic(title){
  var topic = new Topic({
    title: title
  });

  topic.save(function (err, topic_db) {
    if(!err){
      console.log(topic_db._id);
    } else {
      console.err("Error! Topic hasn't been added.");
    }
  });
}

function retrieveTopics(){
	return Topic.find({});
}

function retrieveQuestionsByTopic(topic_name){
	var o_id = Topic.findOne({title: topic_name})._id;
	return Question.find({topic: o_id});
}

function addNewQuestion(topic_name, question){
	var o_id = Topic.findOne({title: topic_name})._id;
	var question = new Question({
		question: question,
		topic: o_id
	});
  	question.save(function (err, question_db) {
	    if(!err){
	      console.log(question_db._id);
	    } else {
	      console.err("Error! Question hasn't been added.");
	    }
  	});
}

function addNewUser(email, username, password){
  var user = new User({
    email: email,
    username: username,
    password: password
  });

  UserSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash){
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    })
  });

  user.save(function (err, user_db) {
    if(!err){
      console.log(user_db._id);
    }
  })
}

exports.addNewTopic = addNewTopic;
exports.retrieveTopics = retrieveTopics;
exports.addNewQuestion = addNewQuestion;
exports.retrieveQuestionsByTopic = retrieveQuestionsByTopic;
exports.requiresLogin = requiresLogin;
exports.addNewUser = addNewUser;