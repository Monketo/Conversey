// var topics =  ["Technologies",
//   "Medicine",
//   "Society",
//   "Age",
//   "Resources",
//   "Health",
//   "Fashion"];
$(function () {
  $.get('/api/get-topics-list/', function (data, status) {
    if(status != "success"){
      console.err('An error occurred while trying to retrieve the topics list.');
    } else {
      $.each(data.topics, function(key, val) {
        $('#topic')
          .append($("<option></option>")
            .attr("value",val)
            .text(val));
      });
    }
  })
  
});