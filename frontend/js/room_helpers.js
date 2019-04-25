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


function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(8);
  });
}

var get_room = function(room_id){
  console.log(room_id);
  $.get('/api/get-room-data/',{roomId:room_id})
    .done(function(data){
      displayData(data,room_id);
    })
    .fail(function(){
      displayFailure();
    })

}


var generate_room = function(){

  var questions_list = $('.questions li').toArray().map(e => e.outerText); 
  var topic = $('.select_topics').val()
  var room_id = uuidv4()

  room = new Room(room_id,topic,questions_list)
  room_json = room.toJSON()

  $.post('/api/add-room/',room_json)
   .done(function(){
    window.location.href = "./room_join.html#displayData&room_id="+room_id;
   })
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









