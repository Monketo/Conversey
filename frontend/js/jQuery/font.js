
var anim_classes = {
  bounce: 'animated bounceInDown',
  animationEnd: 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
  bounceOutLeft: 'animated fadeOutUp',
  bounceInLeft: 'animated zoomInUp',
  fadeOutef: 'animated fadeOut',
  fadeInef: 'animated fadeIn'
};


function test(){

var s=Snap('#test');
var text=get_question;
if(!(get_question===undefined)){
var len=text.length;
var array=[];

for(var x=0;x < len;x++){
    var t=text[x]
    array.push(t);
}
var txt=s.text(100,50,array)
$('tspan').css({
	'transform':'translateX(50%)',
    'font-size':24,
    fill:'none',
    stroke:'black',
    'stroke-dasharray':500,
	'stroke-dashoffset':500,
	'text-anchor':'middle'

    
});
txt.attr('x','50%');

$('tspan').each(function(index){
    $(this).stop(true, true).delay(25* index).animate({
        'stroke-dashoffset':0
    }, 400
		
	);
})
}else{
   console.log('quitting');
   $('.no_questions,.whole_page').show();
   $('.filled').text(arrayOfTopics);
   $('.whole_page').addClass('animated fadeIn').one(anim_classes.animationEnd,function(){
   $(this).removeClass('animated fadeIn')
   });
	$alert.addClass('animated bounceIn').one(anim_classes.animationEnd,function(){
	$(this).removeClass('animated bouceIn')
	});
	
 ;
}
}