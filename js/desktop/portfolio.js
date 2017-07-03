$(document).ready(function() {

	/*----Hover effects for bubbles----*/


	$("#about-tinycircle").mouseenter(function() {
		$(this).animate({
			padding: "+=0.6%"
		});
	});
	$("#about-tinycircle").mouseleave(function() {
		$(this).animate({
			padding: "-=0.6%"
		});
	});


	$("#about-tinycircle2").mouseenter(function() {
		$(this).animate({
			padding: "+=0.6%"
		});
	});
	$("#about-tinycircle2").mouseleave(function() {
		$(this).animate({
			padding: "-=0.6%"
		});
	});


	$("#about-smallcircle").mouseenter(function() {
		$(this).animate({
			padding: "+=0.6%"
		});
	});
	$("#about-smallcircle").mouseleave(function() {
		$(this).animate({
			padding: "-=0.6%"
		});
	});


	$("#about-mediumcircle").mouseenter(function() {
		$(this).animate({
			padding: "+=0.6%"
		});
	});
	$("#about-mediumcircle").mouseleave(function() {
		$(this).animate({
			padding: "-=0.6%"
		});
	});

	$("#about-largecircle").mouseenter(function() {
		$(this).animate({
			padding: "+=0.6%"
		});
	});
	$("#about-largecircle").mouseleave(function() {
		$(this).animate({
			padding: "-=0.6%"
		});
	});

	/*----Hover effects for navbar----*/

	$("#home").mouseover(function() {
		$("#homeicon").css("display", "inlineblock");
	});
});
