"use strict";
var animated= false;




$("#initialImage").on("click", function() {
	loadHeader();
});

$(document).ready(function(){
	if(window.location.hash ===''){									//First Load
 		$('#initialImage').fadeIn("slow");
 		setTimeout(loadHeader, 2000);
	}
	else if(window.location.hash !==''){
	 loadHeader();
	}
	$(document).foundation();
});



$(window).on('hashchange', function() {
if(window.location.hash ===''){
		loadHome();
	}
	else if(window.location.hash ==='#'){
		loadHome();
	}
	else if(window.location.hash ==='#bio'){
		loadBio();
	}
	else if(window.location.hash ==='#contact'){
  	loadContact();
	}
});


function loadHeader(){

 if(!animated){
 $("#initialImage").fadeOut( "slow" );
 $(".header").css("visibility", "visible");
 		$(".header").animate({"margin": "0 0 0 0"}, 800, 'linear', function(){
 			//setTimeout(loadImageContainer, 1000);
 			if(window.location.hash ===''){
				loadImageContainer();
			}
			else if(window.location.hash ==='#'){
				loadImageContainer();
			}
			else if(window.location.hash ==='#bio'){
				loadBio();
			}
			else if(window.location.hash ==='#contact'){
  			loadContact();
			}
			animated=true;
 		});	
}	
}

$( ".navIcons" ).hover(
  function() {
   
  }, function() {
   //$(this).css("width",$(this).innerWidth());
  }
);


function loadImageContainer(){
	//$(".imageContainer").addClass('animate');
	$(".imageContainer .imageStyle").each(function(index, value){
		var $ele = $(value);
		setTimeout(function(){
			$ele.addClass("animate");
		},index*100);
	});
}

function loadHome(){
	$(".imageContainer").css("display", "block");
  $(".div-subContainer").css("display", "none");
  loadImageContainer();
}
function loadBio(){
  $(".imageContainer").css("display", "none");
  $(".div-subContainer").css("visibility", "visible");
  $(".div-subContainer").css("display", "block");
  $(".div-subContainer").load("bio.html");
}

function loadContact(){
	$(".imageContainer").css("display", "none");
  $(".div-subContainer").css("visibility", "visible");
  $(".div-subContainer").css("display", "block");
  $(".div-subContainer").load("contact.html");	
}

$("#contentWork").on("click", '.openModal', function() {
	$(".modalImage").attr("src",$(this).data('img'));
	$("#div-imageModal").foundation('open');

});



