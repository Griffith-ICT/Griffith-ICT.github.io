$(document).ready(function() {

	/*----Hover effects for bubbles----*/

	$("#contact-btn").click(function() {
		$("html, body").animate({
			scrollTop: $("#body").offset().top
		}, 800);
	});

	$("#leftsmall").mouseenter(function() {
		$(this).animate({
			padding: "+=1.5%"
		});
	});
	$("#leftsmall").mouseleave(function() {
		$(this).animate({
			padding: "-=1.5%"
		});
	});


	$("#leftlarge").mouseenter(function() {
		$("#leftlarge").animate({
			padding: "+=1.5%"
		});
	});
	$("#leftlarge").mouseleave(function() {
		$("#leftlarge").animate({
			padding: "-=1.5%"
		});
	});


	$("#rightmedium").mouseenter(function() {
		$("#rightmedium").animate({
			padding: "+=1.5%"
		});
	});
	$("#rightmedium").mouseleave(function() {
		$("#rightmedium").animate({
			padding: "-=1.5%"
		});
	});


	$("#rightlarge").mouseenter(function() {
		$("#rightlarge").animate({
			padding: "+=1.5%"
		});
	});
	$("#rightlarge").mouseleave(function() {
		$("#rightlarge").animate({
			padding: "-=1.5%"
		});
	});

	/*----Hover effects for navbar----*/

	$("#home").mouseover(function() {
		$("#homeicon").css("display", "inlineblock");
	});

	$(".header").mouseover(function() {
		$(".body").css({
			display: "block"
		});
		$("nav").css({
			display: "flex"
		});
	});
});
