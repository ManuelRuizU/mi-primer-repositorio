
$(document).ready(function(){
    $("h1.color1").click(function(){
        $(this).css("color", "red");
    });

    $("p.color2").click(function(){
        $(this).css("color", "green");
    });

    $("h1.color1").dblclick(function(){
        $(this).css("color", "black");
    });

    $("p.color2").dblclick(function(){
        $(this).css("color", "black");
    });
});


