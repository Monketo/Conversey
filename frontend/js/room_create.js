$(document).ready(function() {
	creation_option(".select_topics");
	
  });


$room_topic.click(function(){
	var topic = $('.select_topics').val()
	$('.topic_chooser').addClass('animated bounceOutUp');
	$('.topic_chooser').hide(500);
	

	get_questions_by_topic(topic, generate_questions);

	$('.submit_questions').css(
		{'display':'block',
		'transition': 'display 2s ease-in-out'});

});

$room_submit.click(function(){
	generate_room();
})


$(document).on('click', '.trash', function(){
$(this).parents('li').remove();
});

