"use strict";
var animated = false;
var pageReload = false;

// If initial image is clicked other than fading out and openiing up itself
$("#initialImage").on("click", function() {
	loadImageContainer();
});


//Page Load
$(document).ready(function(){
   if(window.location.hash ===''){									//First Load
 		$('#initialImage').fadeIn("slow");
 		setTimeout(loadHeader, 3500);
	}
	else if(window.location.hash !==''){
	 loadHeader();
	}
	try {
  		$(document).foundation();}
	catch(err) {
  		console.log(err.message);}
});


$(window).on('hashchange', function() {
	if(window.location.hash ==='#bio'){
		loadBio();
	}
	else if(window.location.hash ==='#contact'){
  		loadContact();
	}
	else if(window.location.hash ==='#home'){
  		loadHome();  // Since we dont want delay showing loading images
	}
});

//Happens only on page load
function loadHeader(){

 if(!animated){
 $("#initialImage").fadeOut( "slow",function(){
 	 $(".header").css("visibility", "visible");
 		$(".header").animate({"margin": "0 0 0 0"}, 800, 'linear', function(){			
 			setTimeout(loadImageContainer, 1000);
 			if(window.location.hash ===''){
				loadImageContainer();
			}
			else if(window.location.hash ==='#home'){
				loadImageContainer();

			}
			else if(window.location.hash ==='#bio'){
				loadBio();
				pageReload = true;

			}
			else if(window.location.hash ==='#contact'){
  				loadContact();
  				pageReload = true;
			}
			
 		});
 		animated=true;
 	});
	}	
}


function loadImageContainer(){
	//$(".imageContainer").addClass('animate');
	$(".imageContainer .imageStyle").each(function(index, value){
		var $ele = $(value);
		setTimeout(function(){
			$ele.addClass("animate");
		},index*100);
	});
	$(".div-scrollContainer").css("visibility", "visible");
}

function loadImageContainerWithoutanimation(){

	$(".imageContainer .imageStyle").each(function(index, value){
		var $ele = $(value);
	});
}

function loadHome(){
	if(pageReload){
	   //loadImageContainerWithoutanimation();
	}
	$("#footer").css("bottom", "0");
	 $(".div-subContainer").css("display", "none");
	 $(".imageContainer").css("display", "block");

  //$(".div-subContainer").css("visibility", "hidden");
  //$(".imageContainer").css("visibility", "visible");
 
 //$(".imageContainer").addClass('animate');
}
function loadBio(){
  $("#footer").css("bottom", "3em");
  $(".imageContainer").css("display", "none");
  $(".div-subContainer").css("visibility", "visible");
  $(".div-subContainer").css("display", "block");
  $(".div-subContainer").load("bio.html");
}

function loadContact(){
  $("#footer").css("bottom", "3em");
  $(".imageContainer").css("display", "none");
  $(".div-subContainer").css("visibility", "visible");
  $(".div-subContainer").css("display", "block");
  $(".div-subContainer").load("contact.html");	
}

$("#contentWork").on("click", '.openModal', function() {
	$(".modalImage").attr("src",$(this).data('img'));
	$('#div-imageModal').css('max-height', $('html').height());
	$("#div-imageModal").foundation('open');

});

function nextOnClick(){
  $('#div-columnContainer').animate({scrollLeft:'+=700'},500); 
}

function previousOnClick(){
  $('#div-columnContainer').animate({scrollLeft:'-=700'},500); 
}

function openNav() {
  document.getElementById("mySidenav").style.width = "50%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
