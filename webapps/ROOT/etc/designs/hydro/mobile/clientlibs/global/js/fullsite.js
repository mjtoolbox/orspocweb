$(document).ready(function() {

    $(".fullsite").click(function(e){

        // Prevent regular click behaviour
        e.preventDefault();
        e.stopPropagation();

        if ( $(this).hasClass('view-mobile') ) {
            // Modify cookie value to mobile 
        	$.cookie('BCHydroMobile', '1', { path: '/' });
        } else {
        	// Modify cookie value to desktop 
        	$.cookie('BCHydroMobile', '-1', { path: '/' });
        }

        window.location = $(this).attr('href');

    });

});