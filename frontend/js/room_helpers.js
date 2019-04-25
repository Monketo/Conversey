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

var new_arr = [123];
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

    $room_welcome.text(room_id);
    $room_header.css("display","block");
    $.post('/api/get-room-data/', {roomId:room_id})
          .done(function( data ) {
      var topic_name = data.topic;
      new_arr = data.questions;
      var $topic = $('#topic');
      $('#test').empty();
      $('.main-button').transition({
        transform: 'translateY(200px)'
      }, 1200, function () {
        $('.container').fadeIn(1000);
        console.log(new_arr);
        getquestion(randomized=false);
        $topic.text(topic_name);
        $topic.show();
        $topic.removeClass(anim_classes.bounceOutLeft);
        $topic.addClass(anim_classes.bounce).one(anim_classes.animationEnd, function () {
          $topic.removeClass(anim_classes.bounce)
          test() 
        });
        $('.main-button').show();
        $('.main-button').addClass(anim_classes.fadeInef);
        console.log(new_arr);
      })
    })
  });










