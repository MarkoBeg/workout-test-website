jQuery(document).ready(function($){
    $("#hamburger-btn").click(function() {

        if ($(this).hasClass("live")) {
            $("nav ul").slideUp();

        }   else  {
            $("nav ul").slideDown();
                    
        }
        $(this).toggleClass("live");
         
    });

    
});