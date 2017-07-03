$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 150) {
        $("#smallbubble,#tinybubble,#mediumbubble").fadeIn("slow");}
});

$(document).ready(function() {
    
    /*----Hover effects for header bubbles----*/


    $("#leftsmall").mouseenter(function() {
        $("#leftsmall").animate({padding: "+=1.8%"});
    });
    $("#leftsmall").mouseleave(function() {
        $("#leftsmall").animate({padding: "-=1.8%"});
    });


    $("#leftlarge").mouseenter(function() {
        $("#leftlarge").animate({padding: "+=1.8%"});
    });
    $("#leftlarge").mouseleave(function() {
        $("#leftlarge").animate({padding: "-=1.8%"});
    });


    $("#rightsmall").mouseenter(function() {
        $("#rightsmall").animate({padding: "+=1.8%"});
    });
    $("#rightsmall").mouseleave(function() {
        $("#rightsmall").animate({padding: "-=1.8%"});
    });


    $("#rightmedium").mouseenter(function() {
        $("#rightmedium").animate({padding: "+=1.8%"});
    });
    $("#rightmedium").mouseleave(function() {
        $("#rightmedium").animate({padding: "-=1.8%"});
    });


    $("#rightlarge").mouseenter(function() {
        $("#rightlarge").animate({padding: "+=1.8%"});
    });
    $("#rightlarge").mouseleave(function() {
        $("#rightlarge").animate({padding: "-=1.8%"});
    });


    /*----Hover effects for body1 bubbles----*/
    
    $("#tinybubble").mouseenter(function() {
        $("#tinybubble").animate({padding: "+=0.5%"});
    });
    $("#tinybubble").mouseleave(function() {
        $("#tinybubble").animate({padding: "-=0.5%"});
    });


    $("#smallbubble").mouseenter(function() {
        $("#smallbubble").animate({padding: "+=1%"});
    });
    $("#smallbubble").mouseleave(function() {
        $("#smallbubble").animate({padding: "-=1%"});
    });


    $("#mediumbubble").mouseenter(function() {
        $("#mediumbubble").animate({padding: "+=1%"});
    });
    $("#mediumbubble").mouseleave(function() {
        $("#mediumbubble").animate({padding: "-=1%"});
    });




    /*----Hover effects for navbar----*/

    $("#home").mouseover(function(){
        $("#homeicon").css("display", "inlineblock");
    });
});