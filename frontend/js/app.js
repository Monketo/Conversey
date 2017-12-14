/*var randomProperty = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};//function to get a random property


var new_arr=randomProperty(questions_test);//just the random property from object(property consists of arrays)
var duplicate=new_arr.slice(0);//copy of array,i need it to restore array when it's empty
$('.primary,.tertiary').click(function() {
if(new_arr.length===0){//restore the array
	new_arr=duplicate.slice(0);
}
var get_question = new_arr[Math.floor(Math.random()*new_arr.length)];
var indexOfQuestion=new_arr.indexOf(get_question);
if(new_arr.length>0){ //trying to avoid repeating of questions 
		new_arr.splice(indexOfQuestion,1);	
}

	
	
	$('.secondary').click(function(){
new_arr=randomProperty(questions_test);
duplicate=new_arr.slice(0);
console.log("The button 'extend' is clicked");
});
		
		*/
		