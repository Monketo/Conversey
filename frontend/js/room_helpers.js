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


var generate_room = function(){

  var questions_list = $('.questions li').toArray().map(e => e.outerText); 
  var topic = $('.select_topics').val()
  var room_id = $room_field.val()
  room = new Room(room_id,topic,questions_list)
  room_json = room.toJSON()
  console.log("Room json", room_json);
}

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
   // creation_option(".select_topics");
});









