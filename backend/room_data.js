let rooms = {}

exports.addRoom = function(roomJson){
	console.log(roomJson);
	console.log(roomJson.id);
	console.log(roomJson.topic);
	console.log(roomJson['questions_list[]'])
	rooms[roomJson.id] = {
      topic:  roomJson.topic,
      questions_list: roomJson['questions_list[]']
	}
}
exports.Rooms = rooms;