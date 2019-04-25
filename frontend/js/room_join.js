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

