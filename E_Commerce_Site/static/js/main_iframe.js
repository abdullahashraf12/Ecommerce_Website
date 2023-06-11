$(document).ready(function () {
    $(".popup").hide()
    $("#btn_prog").mouseenter(function (e) {
    alert("btn")
        $("#iframe_id").show();
    // e.preventDefault();
    // $("#iframe_id").attr("src", $(this).attr('href'));
    $(".links").fadeOut('slow');
    $(".popup").fadeIn('slow');
    
    $("#iframe_id").removeProp("hidden");
    
    });

    $("#iframe_id").mouseleave(function () {
        $(".popup").fadeOut('slow');
        $(".links").fadeIn('slow');

            
    });
});
