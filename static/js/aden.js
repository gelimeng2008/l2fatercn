// aden.js
$(function() {

    var isMobileWidth = $(window).width() <= 960

    var $tabMenu = $("#tabMenu");

    // aden fullpage
    var firstLoad = true

    $('#fullpage').fullpage({
        //Navigation
        menu: $tabMenu,
        anchors: ['aden1', 'aden2', 'aden3', 'aden4', 'aden5', 'aden6'],

        //Scrolling
        // scrollOverflow: true,
        // loopTop: true,

        responsiveWidth: 960,
        // responsiveSlides: true,

        //events
        onLeave: function(index, nextIndex, direction) {
            if(!isMobileWidth){
                sectionFadeIn(nextIndex);
            }
            // console.log('onLeave - index: ' + index);
            // console.log('onLeave - nextIndex: ' + nextIndex);
        },
        afterLoad: function(anchorLink, index){
            // if(!isMobileWidth){
            //     if(index == 1 && firstLoad == true){
            //         sectionFadeIn(1);
            //         firstLoad = false;
            //     }else{
            //         firstLoad = false;
            //     }
            // }
            // console.log('afterLoad - index: ' + index);
        },
        afterResponsive: function(isResponsive){
            // console.log(isResponsive)
        }
    });
});

// section fadeIn
function sectionFadeIn(index){
    var section = ['.aden1', '.aden2', '.aden3', '.aden4', '.aden5', '.aden6']
    tram($(section[index - 1] + ' .aden-bg1'))
        .add("transform .5s ease-out-quart")
        .start({ y: 0, scale: 1 })
    tram($(section[index - 1] + ' .aden-title'))
        .set({ opacity: 0 })
        .add("opacity 4s ease-out-quart")
        .start({ opacity: 1 })
    tram($(section[index - 1] + ' .scroll-icon'))
        .set({ y: 50, opacity: 0 })
        .add("opacity .5s ease-out-quart")
        .add("transform .5s ease-out-quart")
        .wait(1800)
        .then({ y: 0, opacity: 1 })
    // aden scene
    switch(index){
        case 1:
            tram($('.aden-cover-bg .cover-bg1'))
                .set({ y: 50, scale: 1.15, opacity: 0 })
                .add("opacity 3s ease-out-quart")
                .add("transform 3s ease-out-quart")
                .start({ y: 0, scale: 1, opacity: 1 })

            tram($('.aden-cover-bg .cover-bg2'))
                .set({ y: 50, scale: 1.5 })
                .add("transform 3.5s ease-out-quart")
                .start({ y: 0, scale: 1 })
            break;
        case 2:
            tram($(section[index - 1] + ' .aden-char1'))
                .set({ x: -100, y: 0, scale: 1.45 })
                .add("transform 4s ease-out-quart")
                .start({ x: 0, y: 0, scale: 1 })
            break;
        case 3:
            tram($(section[index - 1] + ' .aden-char1'))
                .set({ x: -100, y: 0, scale: 1.45 })
                .add("transform 4s ease-out-quart")
                .start({ x: 0, y: 0, scale: 1 })
            break;
        case 4:
            tram($(section[index - 1] + ' .aden-char1'))
                .set({ x: -100, y: 0, scale: 1.45 })
                .add("transform 4s ease-out-quart")
                .start({ x: 0, y: 0, scale: 1 })
            break;
        case 5:
            tram($(section[index - 1] + ' .aden-char1'))
                .set({ x: -100, y: 0, scale: 1.45 })
                .add("transform 4s ease-out-quart")
                .start({ x: 0, y: 0, scale: 1 })
            break;
    }
}