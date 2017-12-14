$(document).ready(function(){

	
	
$(window).scroll(function(){
	
	var currentScrollPosition=$(this).scrollTop();
	console.log(currentScrollPosition);
	if(currentScrollPosition>450&&currentScrollPosition<=700){
		
		$('.slide img').addClass("animatede");	
}else if(currentScrollPosition>700){


	
	
	
}else if(currentScrollPosition>100&&currentScrollPosition<=450){
	$('.arrow').css('opacity','0');
}else{
	$('.arrow').css('opacity','0.6');
}

	
});
	
	
});