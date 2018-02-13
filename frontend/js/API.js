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

exports.createUser = function(user_info, callback) {
  backendPost("/api/create-user/", user_info, callback);
};