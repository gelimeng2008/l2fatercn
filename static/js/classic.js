// classic.js
$(function() {
    
    var isMobileWidth = $(window).width() <= 960
    
    if(!isMobileWidth){
        $('body').css('overflow', 'hidden');
        sectionFadeIn('.classic1');
    }
});

// section fadeIn
function sectionFadeIn(section){
    tram($(section + ' .classic-bg1'))
        .add("transform .5s ease-out-quart")
        .start({ y: 0, scale: 1 })
    tram($(section + ' .classic-title'))
        .set({ opacity: 0 })
        .add("opacity 4s ease-out-quart")
        .start({ opacity: 1 })
    tram($(section + ' .scroll-icon'))
        .set({ y: 50, opacity: 0 })
        .add("opacity .5s ease-out-quart")
        .add("transform .5s ease-out-quart")
        .wait(1800)
        .then({ y: 0, opacity: 1 })
    
    tram($('.classic-cover-bg .cover-bg1'))
        .set({ y: 50, scale: 1.15, opacity: 0 })
        .add("opacity 3s ease-out-quart")
        .add("transform 3s ease-out-quart")
        .start({ y: 0, scale: 1, opacity: 1 })
    tram($('.classic-cover-bg .cover-bg2'))
        .set({ y: 50, scale: 1.5 })
        .add("transform 3.5s ease-out-quart")
        .start({ y: 0, scale: 1 })
    tram($(section + ' .classic-char1'))
        .set({ x: -100, y: 0, scale: 1.45 })
        .add("transform 4s ease-out-quart")
        .start({ x: 0, y: 0, scale: 1 })
    $('body').css('overflow', 'auto');
}