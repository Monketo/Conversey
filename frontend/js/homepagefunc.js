var $root = $('html, body');
$('.arrow').click(function(){
		$root.animate({
        scrollTop: $('.slide-1').offset().top
    }, 500)
	});
$(document).ready(function() {
        $("body").css("display", "none");
		$("body").fadeIn(500);
		    $("a[href$='html']").click(function(event){
        event.preventDefault();
		if($(this).hasClass('transition')){
        linkLocation = $(this).attr('xlink:href');
		 
		}else{
		linkLocation=$(this).attr('href');
		}
		$("body").fadeOut(400, redirectPage);
		console.log(linkLocation);
       
    });
	$("a[href^='.']").click(function(event){
		$root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
	
   
    return false;
		
	});
         
    function redirectPage() {
		window.location = linkLocation;
    }
});
    