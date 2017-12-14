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
  id : Number,
  email : String,
  username: String,
  password: String
});

var Users	=	mongoo.model('Users',	UserSchema);
var movie	=	new	Movie({
  title:	"Lord	of	the	Rings",
  release_date:	new	Date("2007-08-01"),
  cast:	["John",	"Paula"]
});