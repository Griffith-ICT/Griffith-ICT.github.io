$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 350) {
        $('#body1mockup').fadeIn("slow");}
});


/*----Hover effects for header bubbles----*/

$(document).ready(function() {
    $("#leftsmall").mouseenter(function() {
        $("#leftsmall").animate({padding: "+=0.2%"});
    });
    $("#leftsmall").mouseleave(function() {
        $("#leftsmall").animate({padding: "-=0.2%"});
    });


    $("#leftlarge").mouseenter(function() {
        $("#leftlarge").animate({padding: "+=0.5%"});
    });
    $("#leftlarge").mouseleave(function() {
        $("#leftlarge").animate({padding: "-=0.5%"});
    });


    $("#leftmedium").mouseenter(function() {
        $("#leftmedium").animate({padding: "+=0.4%"});
    });
    $("#leftmedium").mouseleave(function() {
        $("#leftmedium").animate({padding: "-=0.4%"});
    });


    $("#rightmedium").mouseenter(function() {
        $("#rightmedium").animate({padding: "+=0.4%"});
    });
    $("#rightmedium").mouseleave(function() {
        $("#rightmedium").animate({padding: "-=0.4%"});
    });


    $("#rightlarge").mouseenter(function() {
        $("#rightlarge").animate({padding: "+=0.4%"});
    });
    $("#rightlarge").mouseleave(function() {
        $("#rightlarge").animate({padding: "-=0.4%"});
    });
});
