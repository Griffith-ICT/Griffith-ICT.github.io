function showMenu() {
	document.getElementById("menubox").style.display = "flex";
	document.getElementById("menu").style.display = "none";
	document.getElementById("x").style.display = "block";
	document.getElementById("footer").style.display = "none";
	document.getElementById("body").style.overflow = "hidden";
}

function hideMenu() {
	document.getElementById("x").style.display ="none";
	document.getElementById("menu").style.display ="block";
}


$(document).ready(function() {

	$("#enquirebutton").click(function() {
		$("html, body").animate({
			scrollTop: $("#textbox1").offset().top
		}, 800);
	});


	$("#menu").click(function() {
		$('body').bind('touchmove', function(e){e.preventDefault()})
		$("#menubox").animate({
			marginLeft: "0px"
		}, 400);
		$("#menu").css({display: "none"})
	});
	$("#x").click(function() {
		$('body').unbind('touchmove')
		$("#menubox").animate({
			marginLeft: "100vw"
		}, 600);
		$("#flexbox").animate({
			marginLeft: "0px"
		}, 500);
		$("#body").css({
			overflow: "visible"
		});
		$("#footer").css({
			display: "block"
		});
	});
});
