var anim_classes = {
  bounce: 'animated bounceInDown',
  animationEnd: 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
  bounceOutLeft: 'animated fadeOutUp',
  bounceInLeft: 'animated zoomInUp',
  fadeOutef: 'animated fadeOut',
  fadeInef: 'animated fadeIn'
};

var $join_btn = $('.join_room');

var $alert = $('.no_questions');
var $room_field = $('.room_id');
var $room_welcome = $('.room_id_text');
var $room_header = $('.room_header');
var $room_topic = $('.select_topic');
var $room_submit = $('.submit_questions');


$( document ).ready(function() {

   $('.no_questions,.whole_page').show();
   $('.whole_page').addClass('animated fadeIn').one(anim_classes.animationEnd,function(){
   $(this).removeClass('animated fadeIn')
   });
	$alert.addClass('animated bounceIn').one(anim_classes.animationEnd,function(){
	$(this).removeClass('animated bouceIn')
	});

  });


$( document ).ready(function() {
	//Just fading out of the main page, and alert box appearance
   $('.no_questions,.whole_page').show();
   $('.whole_page').addClass('animated fadeIn').one(anim_classes.animationEnd,function(){
   $(this).removeClass('animated fadeIn')
   });

	$alert.addClass('animated bounceIn').one(anim_classes.animationEnd,function(){
	$(this).removeClass('animated bouceIn')
	});


  });



$join_btn.click(function(){
	//Animation part here
	var room_id = $room_field.val()

	 $('.whole_page').addClass(anim_classes.fadeOutef).one(anim_classes.animationEnd, function () {
    $(this).removeClass(anim_classes.fadeOutef)
    $(this).hide()
  })

  $alert.addClass('animated bounceOutUp').one(anim_classes.animationEnd, function () {

    $(this).removeClass('animated bounceOutUp')
    $(this).hide()  
})

   $room_welcome.html(room_id);
   $room_header.css("display","block");
   creation_option(".select_topics");
});

$room_topic.click(function(){
	var topic = $('.select_topics').val()
	$('.topic_chooser').addClass('animated bounceOutUp');
	$('.topic_chooser').hide(500);
	

	get_questions_by_topic(topic);

	$('.submit_questions').css(
		{'display':'block',
		'transition': 'display 2s ease-in-out'});

});

$room_submit.click(function(){

	generate_room();
})

var generate_room = function(){

  var questions_list = $('.questions li').toArray().map(e => e.outerText); 
  var topic = $('.select_topics').val()
  var room_id = $room_field.val()
  room = new Room(room_id,topic,questions_list)
  room_json = room.toJSON()
  console.log("Room json", room_json);
}


$(document).on('click', '.trash', function(){
$(this).parents('li').remove();
});


class Room {
  constructor(id,topic,questions_list){
    this.id = id;
    this.topic = topic;
    this.questions_list = questions_list;
  }

  toJSON() {
    return {
      id: this.id,
      topic:  this.topic,
      questions_list:   this.questions_list
    };
}
}





