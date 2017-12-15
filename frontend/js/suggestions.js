// var backend = require('./API');
var topics =  ["Technologies",
  "Medicine",
  "Society",
  "Age",
  "Resources",
  "Health",
  "Fashion"];
$(function () {
  // backend.getTopics(function (err, data) {
  //   if(err){
  //     console.log('An error occurred while trying to retrieve the topics list.');
  //   } else {
  //
  //
  //   }
  // })
  $.each(topics, function(key, val) {
    $('#topic')
      .append($("<option></option>")
        .attr("value",val)
        .text(val));
  });
})