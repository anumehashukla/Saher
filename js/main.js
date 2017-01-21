"use strict";
var animated= false;

$(window).bind("load", function() {
  setTimeout(loadHeader, 2000);

});

$(window).on('hashchange', function() {
if(window.location.hash ===''){
  $(".div-imageContainer").css("display", "block");
  $(".div-subContainer").css("display", "none");

}
else if(window.location.hash ==='#bio'){
  $(".div-imageContainer").css("display", "none");
  $(".div-subContainer").css("visibility", "visible");
  $(".div-subContainer").css("display", "block");
  $(".div-subContainer").load("bio.html");
}
else if(window.location.hash ==='#contact'){
  $(".div-imageContainer").css("display", "none");
  $(".div-subContainer").css("visibility", "visible");
   $(".div-subContainer").css("display", "block");
  $(".div-subContainer").load("contact.html");
	
}
});


$("#introImage").on("click", (function() {
	loadHeader();
}));



function loadHeader(){
 $("#introImage").fadeOut( "slow" );

 if(!animated){
 $(".header").animate({"margin": "0 0 0 0"}, 800, 'linear', function(){
 	  //setTimeout(loadImageContainer, 1000);
 	  loadImageContainer();
	animated=true;
 });
		
}	
	
}
function loadImageContainer(){
 //$(".div-imageContainer").css("visibility", "visible");
	$(".div-imageContainer").addClass('animate');
}

