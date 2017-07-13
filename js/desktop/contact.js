$(document).ready(function() {

	/*----Hover effects for bubbles----*/

	$("#contact-btn").click(function() {
		$("html, body").animate({
			scrollTop: $("#body").offset().top
		}, 800);
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
