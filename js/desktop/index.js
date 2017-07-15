$(document).ready(function() {

    $("#indicator").click(function() {
		$("html, body").animate({
			scrollTop: $("#body").offset().top
		}, 800);
	});

    $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 350) {
        $('#body1mockup').fadeIn("slow");}
});

});



