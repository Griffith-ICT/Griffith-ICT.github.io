$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 150) {
        $("#smallbubble,#tinybubble,#mediumbubble").fadeIn("slow");}
});

$(document).ready(function() {
    /*----Hover effects for navbar----*/

    $("#home").mouseover(function(){
        $("#homeicon").css("display", "inlineblock");
    });
});