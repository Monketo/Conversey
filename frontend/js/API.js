var API_URL = "http://localhost:5050";

function backendGet(url, callback) {
  $.ajax({
    url: API_URL + url,
    type: 'GET',
    contentType: 'json',
    success: function(data){
      callback(null, data);
    },
    error: function() {
      callback(new Error("Ajax Failed"));
    }
  });
}

function backendPost(url, data, callback) {
  $.ajax({
    url: API_URL + url,
    type: 'POST',
    contentType : 'application/json',
    data: JSON.stringify(data),
    success: function(data){
      callback(null, data);
    },
    error: function() {
      callback(new Error("Ajax Failed"));
    }
  })
}

exports.getTopics = function(callback) {
  backendGet("/api/get-topics-list/", callback);
};

exports.getRoomData = function(callback) {
  backendGet("/api/get-room-data/", callback);
};

exports.getQuestionsByTopic = function(topic_info, callback) {
  backendPost("/api/get-questions-by-topic/", topic_info, callback);
};

exports.addQuestion = function(question_info, callback) {
  backendPost("/api/add-question/", question_info, callback);
};

exports.addRoom = function(room_info, callback) {
  backendPost("/api/add-room/", room_info, callback);
};

exports.addTopic = function(topic_info, callback) {
  backendPost("/api/add-topic/", topic_info, callback);
};

exports.createUser = function(user_info, callback) {
  backendPost("/api/create-user/", user_info, callback);
};