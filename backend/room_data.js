let rooms = {}

exports.addRoom = function(roomJson){
	rooms[roomJson.id] = {
      topic:  roomJson.topic,
      questions_list: roomJson.questions_list
	}
}
exports.Rooms = rooms;