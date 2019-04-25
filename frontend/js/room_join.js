
var starter = function(){
   $(document).ready( function() {
	//Just fading out of the main page, and alert box appearance
   $('.no_questions,.whole_page').show();
   $('.whole_page').addClass('animated fadeIn').one(anim_classes.animationEnd,function(){
   $(this).removeClass('animated fadeIn')
   });

	$alert.addClass('animated bounceIn').one(anim_classes.animationEnd,function(){
	$(this).removeClass('animated bouceIn')
	});
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
console.log('Plak-plak')
}

var displayData = function(data, room_id){
$room_welcome.html(room_id);
$room_header.css("display","block");
}

checkLinkParams();