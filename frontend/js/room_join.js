var arr = [];
var starter = function(){

	//Just fading out of the main page, and alert box appearance
	$('.no_questions,.whole_page').show();
	$('.whole_page').addClass('animated fadeIn').one(anim_classes.animationEnd,function(){
	$(this).removeClass('animated fadeIn')
	});

	$alert.addClass('animated bounceIn').one(anim_classes.animationEnd,function(){
	$(this).removeClass('animated bouceIn')
	});

}

var checkLinkParams = function(){

	var href = window.location.href;
	if (href.indexOf('#')>=0) {
		var param_list  = href.split('#')[1].split('&');

		if (param_list[0] == 'displayData')
		{
			var room_id  = param_list[1].split('=')[1];
			get_room(room_id);
		}
	}else{
		starter();
	}
}

var displayFailure = function(){
	$('.not_exist').show(200);
}

var getquestion = function (questions_arr, randomized = true) {
  var index = 0;
  if (randomized) {
    index = Math.floor(Math.random() * questions_arr.length)
  }
  get_question = questions_arr[index];
  var indexOfQuestion = questions_arr.indexOf(get_question);

  if (questions_arr.length > 0) { //trying to avoid repeating of questions 
    questions_arr.splice(indexOfQuestion, 1);
  }
}

var displayData = function(data, room_id){
	console.trace();
    $room_welcome.text(data.title);
    $('.room_id_num').text(room_id);
    $room_header.css("display","block");
	var topic_name = data.topic;
	arrayOfTopics = [topic_name];
	arr = data.questions;
	var $topic = $('#topic');
	getquestion(arr, randomized=false);
	$('.main-button').transition({
	transform: 'translateY(200px)'
	}, 200, function () {
	$('.container').fadeIn(100);
		$topic.text(topic_name);
		$topic.show();
		$topic.removeClass(anim_classes.bounceOutLeft);
		$topic.addClass(anim_classes.bounce).one(anim_classes.animationEnd, function () {
		  $topic.removeClass(anim_classes.bounce)
		  test() 
		});
		$('.main-button').show();
		$('.main-button').addClass(anim_classes.fadeInef);
	})
   
}

$('#exit-btn').on('click', function(){
	window.location.replace("/");
});

$('#extend-btn').on('click', function(){
	getquestion(arr, randomized=false);
	$('#test').empty();
	test();
});

$(function() {
	checkLinkParams();
});