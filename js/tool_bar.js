"use strict";

$(document).ready( () => {

    let totalSlides = $('.tool').length;

    function goToSlide(index) {
        let percentage = -(index * (100 / totalSlides));

        $('.slider_track').css('transform', 'translateX(' + percentage + '%)');
    }

    $('#todo').on('click', function() {
        goToSlide(0);
    })

    $('#palette').on('click', function() {
        goToSlide(1);
    })

});