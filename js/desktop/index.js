$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 350) {
        $('#body1mockup').fadeIn("slow");}
});