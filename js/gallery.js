"use strict";

$(document).ready( () => {

    const track = $('.slider_track');
    const slides = $('.slide');
    const totalOriginalSlides = slides.length;

    const firstClone = slides.first().clone().appendTo(track);
    const lastClone = slides.last().clone().prependTo(track);

    const allSlides = $('.slide');

    let currentIndex = 1;
    let slideTimer;

    function goToSlide(index, animate = true) {

        const slideWidth = allSlides.first().outerWidth();
        const moveAmount = index * slideWidth;

        if (!animate) {
            track.addClass('no-transition');
        }
        else {
            track.removeClass('no-transition');
        }
        
        $('.slider_track').css('transform', `translateX(-${moveAmount}px)`);

        $('.slide').removeClass('active');
        $('.slide').eq(index).addClass('active');
    }

    function startTimer() {
        clearInterval(slideTimer);

        slideTimer = setInterval(() => {

            currentIndex++;
            goToSlide(currentIndex);

            if (currentIndex === totalOriginalSlides + 1) {
                setTimeout(() => {
                    currentIndex = 1;
                    goToSlide(currentIndex, false);
                    startTimer();
                }, 600);
            }
        }, 5000);
    }

    $(window).on('resize', () => {
        goToSlide(currentIndex, false);
    });

    goToSlide(1, false);
    startTimer();
});