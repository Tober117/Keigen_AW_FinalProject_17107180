"use strict";

$(document).ready( () => {

    function generatePalette() {
        $('.color_card').each(function() {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

            $(this).find('.swatch').css('background-color', randomColor);
            $(this).find('.hex_code').text(randomColor.toUpperCase());
        });
    }

    generatePalette();

    $('#generate').on('click', function() {
        generatePalette();
    });

});