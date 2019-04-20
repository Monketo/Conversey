// var topics =  ["Technologies",
//   "Medicine",
//   "Society",
//   "Age",
//   "Resources",
//   "Health",
//   "Fashion"];

var creation_option  = function (option_id) {
  $.get('/api/get-topics-list/', function (data, status) {
    
    if(status != "success"){
      console.err('An error occurred while trying to retrieve the topics list.');
    } else {
      $.each(data.topics, function(key, val) {
      console.log(option_id);
      console.log(val);
        $(option_id)
          .append($("<option></option>")
            .attr("value",val)
            .text(val));
      });
    }
  })
}


var get_questions_by_topic = function(topic){
console.log(topic);
$.post('/api/get-questions-by-topic/', {topic_name:topic})
.done(function( data ) {
    generate_questions(data["questions"]);
  });
}

var generate_questions = function(questions){
  questions.forEach(function(element){

    question_html =
        '<li class = "row">'+
        '<span class="col-9">' + element.question + '</span>'+
        
        '<div class="btn btn-default btn-sm trash ">'+
        '<span class="glyphicon glyphicon-trash col-1"></span>'+
        '</div>'+
        '<div class="btn btn-default btn-sm edit ">'+
        '<span class="glyphicon glyphicon-edit col-1"></span>'+
        '</div>'+
        '</div></li>'
      
  
    $('.questions').append(
      question_html
      );
  });
}