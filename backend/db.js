var bcrypt = require('bcrypt');

var mongo	=	require('mongoose');
mongo.connect('mongodb://localhost/Conversey');
var db = mongo.connection;
db.on('error',	function	(err)	{
  console.log('connection	error:',	err.message);
});
db.once('open',	function	callback	()	{
  console.log("Connected to DB!");
});

var UserSchema =	new	mongo.Schema({
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

var User	=	mongoo.model('User',	UserSchema);

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


exports.requiresLogin = requiresLogin;
exports.addNewUser = addNewUser;