$(document).ready(function(){

var flag=0;
var limitnbr=15;

$.ajax({
type:"GET",
url:"post.php",
data: {
	'offset':0,
	'limit':limitnbr,
},
success: function(data){
	$('#publicationPost').append(data);
	flag +=limitnbr;
}
	
});

$(window).scroll(function() {

	if($(window).scrollTop() >= $(document).height() - $(window).height())
	{

	$.ajax({
type:"GET",
url:"post.php",
data: {
	'offset': flag,
	'limit':limitnbr,
},
success: function(data){
	$('#publicationPost').append(data);
	flag +=limitnbr;
}
	
});
	}	
});	
});