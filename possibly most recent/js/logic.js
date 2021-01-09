"use strict";
//Please do not judge this code too harshly, I made it as a college student and have just been doing the minimum 
//maintenance required since. Someday I may rework it for real, but I have had more fun things to work on in my spare time :)

//reading through this again 5 years later...yikes

$(document).ready(function() {
	var atTop = true;

	var animationDone = false;

	var screenWidth = $(window).width();

	var screenHeight = $(window).height();

	var mobile = (screenWidth < 480);

	var bounceClass = "animated bounceIn";

	var fadeClass = "animated fadeIn"

	var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";



	$(".intro").css({"height": $(".portfolio").height() + (screenHeight * .7) + "px"});



	var scrollTop = $(window).scrollTop() ;

	atTop = (scrollTop == 0);



	if (atTop){

		FirstStartingPosition();

		$("#name").addClass(fadeClass).one(animationEnd, function(){

			$("#name").removeClass(fadeClass);

		});

		$("#logo").addClass(bounceClass).one(animationEnd, function(){

			$("#logo").removeClass(bounceClass);

		});

		$("#job").addClass(fadeClass).one(animationEnd, function(){

			$("#job").removeClass(fadeClass);

		});

		if (!mobile){

			$("#contact-buttons").addClass(bounceClass).one(animationEnd, function(){

			$("#contact-buttons").removeClass(bounceClass);

			StartingPosition();

		});

		}

	} else if (!atTop) {

		TopNav();

	}



	//portfolio item functionality

	$("#vp").click(function(){

		window.location = "./projects/virtualPhone.html";

	});



	$("#spartaga").click(function(){

		window.location = "./projects/spartagaMain.html";

	});



	$("#space").click(function(){

		window.location = "./projects/spaceGame.html";

	});



	$("#wizard").click(function(){

		window.location = "./projects/wizard.html";

	});



	$("#kayak").click(function(){

		window.location = "./projects/kayak.html";

	});



	$("#bellhapp").click(function(){

		window.location = "./projects/bellhappMain.html";

	});



	$("#fragments").click(function(){

		window.location = "./projects/fragments.html";

	});



	$("#hackathon").click(function(){

		window.location = "./projects/hackathon.html";

	});



	$("#lunarlander").click(function(){

		window.location = "./projects/lunarlander.html";

	});



	$("#imadatavis").click(function(){

		window.location = "./projects/imadatavis.html";

	});



	$("#quadcopter").click(function(){

		window.location = "./projects/quadcopter.html";

	});

	$("#bowtoblood").click(function(){

		window.location = "./projects/bowToBlood.html";

	});

	$("#wanderword").click(function(){

		window.location = "./projects/wanderword.html";

	});

	$("#dop").click(function(){

		window.location = "./projects/dop.html";

	});

	$("#minecraft").click(function(){

		window.location = "./projects/minecraft.html";

	});

	$("#vrprototypes").click(function(){

		window.location = "vrPrototypes.html";

	});

	$("#trek").click(function(){

		window.location = "trek.html";

	});

	$("#artifact").click(function(){

		window.location = "artifact.html";

	});

	$("#megagame").click(function(){

		window.location = "megaGame.html";

	});



	$(window).resize(function() {

		var screenWidth = $(window).width();

		var screenHeight = $(window).height();



		$(".intro").css({"height": $(".portfolio").height() + (screenHeight * .7) + "px"});



		mobile = (screenWidth < 480);



		var scrollTop = $(window).scrollTop() ;

		atTop = (scrollTop == 0);





		if (atTop){

			StartingPosition();

		} else if (!atTop) {

			TopNav();

		}

	});



	$(window).scroll(function() {



		var screenWidth = $(window).width();

		var screenHeight = $(window).height();

		var scrollTop = $(window).scrollTop();

		var buffer = 0;

		atTop = (scrollTop == 0);



		if (!animationDone && !atTop) {

			animationDone = true;

			if (mobile){

				$("#logo-wrapper").velocity({

				    "width":$("#topbar-wrapper").height() - (screenHeight / 100) + "px", 
					"left":0 + "px", 
					"top":(screenHeight / 100) + "px"

				}, {

				    duration: 400,

				    easing: "cubic"

				});

			} else {

				$("#logo-wrapper").velocity({

				    "width":$("#topbar-wrapper").height() - (screenHeight / 100) + "px", 
					"left":0 + "px", 
				    "top":(screenHeight / 100) + "px"

				}, {

				    duration: 400,

				    easing: "cubic"

				});

			}



			var items = document.getElementsByClassName("portfolioItem");

			var count = 0;

			var bounceClass = "animated bounceIn";

			var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

			while (count < items.length){

				$(items[count]).addClass(bounceClass);

				count++;

			}



			document.getElementById("portfolio").style.opacity = 1;

			document.getElementById("portfolio").style.display = "block";



			TopNav();



		} else if (animationDone && atTop){

			animationDone = false;

			if (mobile){

				$("#logo-wrapper").velocity({

				    "width":screenWidth * .75 + "px", "left":screenWidth / 2 - screenWidth * .75 / 2 + "px", "transform":"translateX(-50%)", 

					"top":(screenHeight / 2) - (screenWidth * .75 * .866 / 2) + "px"

				}, {

				    duration: 400,

				    easing: "cubic"

				});

			} else {

				$("#logo-wrapper").css({"left":"0px"});

				$("#logo-wrapper").velocity({

				    "width":screenWidth / 3 + "px", "left":screenWidth / 2 - (screenWidth / 3 / 2) + "px", "transform":"translateX(-50%)", 

					"top":(screenHeight / 2) - (screenWidth / 3 * .866 / 2) + "px"

				}, {

				    duration: 400,

				    easing: "cubic"

				});

			}

			var items = document.getElementsByClassName("portfolioItem");

			var count = 0;

			var bounceClass = "animated bounceIn";

			while (count < items.length){

				$(items[count]).removeClass(bounceClass);

				count++;

			}



			document.getElementById("portfolio").style.opacity = 0;

			document.getElementById("portfolio").style.display = "none";



			StartingPosition();

		};			

	});



	function StartingPosition(){

		if (mobile) {

			var screenWidth = $(window).width();

			var screenHeight = $(window).height();

			var buffer = 0;

			var logoWidth = screenWidth * .75;

			var logoHeight = logoWidth * .866;

			var nameWidth = $("#name").width();

			var nameHeight = $("#name-wrapper").height();

			var jobWidth = $("#job-wrapper").width();

			var jobHeight = $("#job-wrapper").height();



			//topbar

			$("#topbar-wrapper").css({"opacity": "0"});



			//contact buttons

			$("#contact-buttons").removeAttr( 'style' );



			$("#contact-buttons").css({"height":"6.5%", "left":"50%", "transform":"translateX(-50%)",

				"top":(screenHeight / 2) + (logoHeight / 2) + buffer + $("#name").height() + (screenHeight / 30) + "px"});



			//name

			$("#name-wrapper").removeAttr( 'style' );



			$("#name").css({"font-size":  screenWidth - 40 + "%", "opacity": "1"});



			$("#name-wrapper").css({"left":"50%", "transform":"translateX(-50%)",

				"top":(screenHeight / 2) - (logoHeight / 2) - buffer - $("#name").height() + "px"});



			//logo

			$("#logo-wrapper").removeAttr( 'style' );



			$("#logo-wrapper").css({"width":logoWidth + "px", "left":"50%", "transform":"translateX(-50%)", 

				"top":(screenHeight / 2) - (logoHeight / 2) + "px"});



			//job

			$("#job-wrapper").removeAttr( 'style' );



			$("#job").css({"font-size": screenWidth /4 + "%", "text-align":"center", "opacity": "1"});



			$("#job-wrapper").css({"left":"50%", "transform":"translateX(-50%)",

				"top":(screenHeight / 2) + (logoHeight / 2) + buffer});



			//porfolio

			document.getElementById("portfolio").style.opacity = 0;

			document.getElementById("portfolio").style.display = "none";



		} else{

			var screenWidth = $(window).width();

			var screenHeight = $(window).height();

			var buffer = 0;

			var logoWidth = screenWidth / 3;

			var logoHeight = logoWidth * .866;

			var nameWidth = screenWidth / 2;

			var nameHeight = $("#name-wrapper").height();

			var jobWidth = $("#job-wrapper").width();

			var jobHeight = $("#job-wrapper").height();



			//topbar

			$("#topbar-wrapper").css({"opacity": "0"});



			//contact buttons

			$("#contact-buttons").removeAttr( 'style' );



			$("#contact-buttons").css({"height":"5.5%", "left":"50%", "transform":"translateX(-50%)",

				"top":(screenHeight / 2) + (logoHeight / 2) + buffer + $("#name").height() + (screenHeight / 50) + "px"});



			//name

			$("#name-wrapper").removeAttr( 'style' );



			$("#name").css({"font-size": "4.2rem", "opacity":"1"});



			$("#name-wrapper").css({"left":"50%", "transform":"translateX(-50%)",

				"top":(screenHeight / 2) - (logoHeight / 2) - buffer - $("#name").height() + "px"});



			//logo

			$("#logo-wrapper").removeAttr( 'style' );



			$("#logo-wrapper").css({"width":logoWidth + "px", "left":"50%", "transform":"translateX(-50%)", 

				"top":(screenHeight / 2) - (logoHeight / 2) + "px"});



			//job

			$("#job-wrapper").removeAttr( 'style' );



			$("#job").css({"font-size": "1.2rem", "text-align":"center", "opacity": "1"});



			$("#job-wrapper").css({"left":"50%", "transform":"translateX(-50%)",

				"top":(screenHeight / 2) + (logoHeight / 2) + buffer});



			//porfolio

			document.getElementById("portfolio").style.opacity = 0;

			document.getElementById("portfolio").style.display = "none";

		};

	}



	function FirstStartingPosition(){

		if (mobile) {

			var screenWidth = $(window).width();

			var screenHeight = $(window).height();

			var buffer = 0;

			var logoWidth = screenWidth * .75;

			var logoHeight = logoWidth * .866;

			var nameWidth = $("#name").width();

			var nameHeight = $("#name-wrapper").height();

			var jobWidth = $("#job-wrapper").width();

			var jobHeight = $("#job-wrapper").height();



			//topbar

			$("#topbar-wrapper").css({"opacity": "0"});



			//contact buttons

			$("#contact-buttons").removeAttr( 'style' );



			$("#contact-buttons").css({"height":"6.5%", "left":"50%", "transform":"translateX(-50%)",

				"top":(screenHeight / 2) + (logoHeight / 2) + buffer + $("#name").height() + (screenHeight / 30) + "px"});



			//name

			$("#name-wrapper").removeAttr( 'style' );



			$("#name").css({"font-size":  screenWidth - 40 + "%", "opacity": "1"});



			$("#name-wrapper").css({"left":"50%", "transform":"translateX(-50%)",

				"top":(screenHeight / 2) - (logoHeight / 2) - buffer - $("#name").height() + "px"});



			//logo

			$("#logo-wrapper").removeAttr( 'style' );



			$("#logo-wrapper").css({"width":logoWidth + "px", "left":"50%", "transform":"translateX(-50%)", 

				"top":(screenHeight / 2) - (logoHeight / 2) + "px"});



			//job

			$("#job-wrapper").removeAttr( 'style' );



			$("#job").css({"font-size": screenWidth /4 + "%", "text-align":"center", "opacity": "1"});



			$("#job-wrapper").css({"left":"50%", "transform":"translateX(-50%)",

				"top":(screenHeight / 2) + (logoHeight / 2) + buffer});



			//porfolio

			document.getElementById("portfolio").style.opacity = 0;

			document.getElementById("portfolio").style.display = "none";



		} else{

			var screenWidth = $(window).width();

			var screenHeight = $(window).height();

			var buffer = 0;

			var logoWidth = screenWidth / 3;

			var logoHeight = logoWidth * .866;

			var nameWidth = screenWidth / 2;

			var nameHeight = $("#name-wrapper").height();

			var jobWidth = $("#job-wrapper").width();

			var jobHeight = $("#job-wrapper").height();



			//topbar

			$("#topbar-wrapper").css({"opacity": "0"});



			//contact buttons

			$("#contact-buttons").removeAttr( 'style' );



			$("#contact-buttons").css({"height":"5.5%", "left":"0%", "transform":"translateX(-50%)",

				"top":(screenHeight / 2) + (logoHeight / 2) + buffer + $("#name").height() + (screenHeight / 50) + "px"});



			//name

			$("#name-wrapper").removeAttr( 'style' );



			$("#name").css({"font-size": "4.2rem", "opacity":"1"});



			$("#name-wrapper").css({"left":"50%", "transform":"translateX(-50%)",

				"top":(screenHeight / 2) - (logoHeight / 2) - buffer - $("#name").height() + "px"});



			//logo

			$("#logo-wrapper").removeAttr( 'style' );



			$("#logo-wrapper").css({"width":logoWidth + "px", "left":"50%", "transform":"translateX(-50%)", 

				"top":(screenHeight / 2) - (logoHeight / 2) + "px"});



			//job

			$("#job-wrapper").removeAttr( 'style' );



			$("#job").css({"font-size": "1.2rem", "text-align":"center", "opacity": "1"});



			$("#job-wrapper").css({"left":"50%", "transform":"translateX(-50%)",

				"top":(screenHeight / 2) + (logoHeight / 2) + buffer});



			//porfolio

			document.getElementById("portfolio").style.opacity = 0;

			document.getElementById("portfolio").style.display = "none";

		};

	}



	function TopNav(){

		if (mobile) {

			var screenWidth = $(window).width();

			var screenHeight = $(window).height();

			var buffer = 0;

			var logoWidth = screenWidth * .15;

			var logoHeight = logoWidth * .866;

			var nameWidth = $("#name").width();

			var nameHeight = $("#name-wrapper").height();

			var jobWidth = $("#job-wrapper").width();

			var jobHeight = $("#job-wrapper").height();



			//topbar

			$("#topbar-wrapper").css({"opacity": ".5"});



			//contact buttons

			$("#contact-buttons").removeAttr( 'style' );



			$("#contact-buttons").css({"height":"5%", "left":"50%", "transform":"translateX(-50%)",

				"top":"1%", "text-align":"right"});



			//name

			$("#name-wrapper").removeAttr( 'style' );



			$("#name").css({"font-size":  screenWidth - 40 + "%", "opacity": "0"});



			$("#name-wrapper").css({"left":"50%", "transform":"translateX(-50%)",

				"top":(screenHeight / 2) - ((screenWidth *.75 * .866) / 2) - buffer - $("#name").height() + "px"});



			//logo

			$("#logo-wrapper").removeAttr( 'style' );



			$("#logo-wrapper").css({"width":$("#topbar-wrapper").height() - (screenHeight / 100) + "px", "left":0 + "px", 

				"top":(screenHeight / 100) + "px"});



			//job

			$("#job-wrapper").removeAttr( 'style' );



			$("#job").css({"font-size": screenWidth /4 + "%", "text-align":"center", "opacity": "0"});



			$("#job-wrapper").css({"left":"50%", "transform":"translateX(-50%)",

				"top":(screenHeight / 2) + (logoHeight / 2) + buffer});



			//porfolio

			document.getElementById("portfolio").style.opacity = 1;

			document.getElementById("portfolio").style.display = "block";



		} else{

			var screenWidth = $(window).width();

			var screenHeight = $(window).height();

			var buffer = 0;

			var logoWidth = screenWidth / 20;

			var logoHeight = logoWidth * .866;

			var nameWidth = screenWidth / 2;

			var nameHeight = $("#name-wrapper").height();

			var jobWidth = $("#job-wrapper").width();

			var jobHeight = $("#job-wrapper").height();



			//topbar

			$("#topbar-wrapper").css({ "opacity": ".5"});



			//contact-buttons

			$("#contact-buttons").css({"height":"5%", "left":"50%", "transform":"translateX(-50%)",

				"top":"1%", "text-align":"right"});



			//name

			$("#name-wrapper").removeAttr( 'style' );



			$("#name").css({"font-size": "4.2rem", "opacity": "0"});



			$("#name-wrapper").css({"left":"50%", "transform":"translateX(-50%)",

				"top":(screenHeight / 2) - ((screenWidth / 3 * .866) / 2) - buffer - $("#name").height() + "px"});



			//logo

			$("#logo-wrapper").removeAttr( 'style' );



			$("#logo-wrapper").css({"width":$("#topbar-wrapper").height() - (screenHeight / 100) + "px", "left":0 + "px", 

				"top":(screenHeight / 100) + "px"});

			console.log("should reset height?");

			//job

			$("#job-wrapper").removeAttr( 'style' );



			$("#job").css({"font-size": "1.2rem", "text-align":"center", "opacity": "0"});



			$("#job-wrapper").css({"left":"50%", "transform":"translateX(-50%)",

				"top":(screenHeight / 2) + (logoHeight / 2) + buffer});



			//porfolio

			document.getElementById("portfolio").style.opacity = 1;

			document.getElementById("portfolio").style.display = "block";

		};

	}

});