$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 150) {
        $("#smallbubble,#tinybubble,#mediumbubble").fadeIn("slow");}
});

$(document).ready(function() {
    /*----Hover effects for navbar----*/

    $("#indicator").click(function() {
		$("html, body").animate({
			scrollTop: $("#body").offset().top
		}, 800);
	});


    $("#home").mouseover(function(){
        $("#homeicon").css("display", "inlineblock");
    });
});