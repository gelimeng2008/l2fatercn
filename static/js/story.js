// story.js
$(function() {

    var isMobileWidth = $(window).width() <= 960

    var $tabMenu = $("#tabMenu");

    // story fullpage
    var firstLoad = true

    $('#fullpage').fullpage({
        //Navigation
        menu: $tabMenu,
        anchors: ['story1', 'story2', 'story3', 'story4'],

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
    var section = ['.story1', '.story2', '.story3', '.story4']

    // story scene
    switch(index){
        case 1:
            tram($('.story-cover-bg .cover-bg1'))
                .set({ y: 50, scale: 1.15, opacity: 0 })
                .add("opacity 3s ease-out-quart")
                .add("transform 3s ease-out-quart")
                .start({ y: 0, scale: 1, opacity: 1 })

            tram($('.story-cover-bg .cover-bg2'))
                .set({ y: 50, scale: 1.5 })
                .add("transform 3.5s ease-out-quart")
                .start({ y: 0, scale: 1 })

            tram($(section[index - 1] + ' .story-title'))
                .set({ opacity: 0 })
                .add("opacity 6s ease-out-quart")
                .start({ opacity: 1 })

            tram($(section[index - 1] + ' .scroll-icon'))
                .set({ y: 50, opacity: 0 })
                .add("opacity 1s ease-out-quart")
                .add("transform 1s ease-out-quart")
                .wait(1800)
                .then({ y: 0, opacity: 1 })
            break;
        case 2:
            tram($(section[index - 1] + ' .scroll-icon'))
                .set({ y: 50, opacity: 0 })
                .add("opacity 1s ease-out-quart")
                .add("transform 1s ease-out-quart")
                .wait(2800)
                .then({ y: 0, opacity: 1 })

            tram($(section[index - 1] + ' .story-char1'))
                .set({ x: -100, y: 0, scale: 1.45 })
                .add("transform 4s ease-out-quart")
                .start({ x: 0, y: 0, scale: 1 })

            tram($(section[index - 1] + ' .story-char2'))
                .set({ x: 100, y: 0, scale: 1.15 })
                .add("transform 4s ease-out-quart")
                .start({ x: 0, y: 0, scale: 1 })

            tram($(section[index - 1] + ' .story-char3'))
                .set({ x: 0, y: 50, scale: 1 })
                .add("transform 4s ease-out-quart")
                .start({ x: 0, y: 0, scale: 1 })
            break;
        case 3:
            tram($(section[index - 1] + ' .story-char1'))
                .set({ y: -160 })
                .add("transform 4s ease-out-quart")
                .start({ y: 0 })

            tram($(section[index - 1] + ' .scroll-icon'))
                .set({ y: 50, opacity: 0 })
                .add("opacity 1s ease-out-quart")
                .add("transform 1s ease-out-quart")
                .wait(2800)
                .then({ y: 0, opacity: 1 })
            break;
        case 4:
            tram($(section[index - 1] + ' .story-bg1'))
                .set({ y: -100, scale: 1.5 })
                .add("transform 20s ease-out-quart")
                .start({ y: 0, scale: 1 })

            tram($(section[index - 1] + ' .story-bg2'))
                .set({ y: -100, scale: 2.5 })
                .add("transform 20s ease-out-quart")
                .start({ y: 0, scale: 1 })

            tram($(section[index - 1] + ' .story-char1'))
                .set({ y: 50, scale: 1.5 })
                .add("transform 4s ease-out-quart")
                .start({ y: 0, scale: 1 })

            tram($(section[index - 1] + ' .story-char2'))
                .set({ y: 50, scale: 1.15 })
                .add("transform 4s ease-out-quart")
                .start({ y: 0, scale: 1 })

            tram($(section[index - 1] + ' .story-char3'))
                .set({ y: -60 })
                .add("transform 4s ease-out-quart")
                .start({ y: 0 })

            tram($(section[index - 1] + ' .scroll-icon'))
                .set({ y: 50, opacity: 0 })
                .add("opacity 1s ease-out-quart")
                .add("transform 1s ease-out-quart")
                .wait(2800)
                .then({ y: 0, opacity: 1 })
                break;
    }

    // story text
    if( index <= 4){
        tram($(section[index - 1] + ' .story-desc p'))
            .set({ opacity: 0 })
            .add("opacity 6s ease-out-quart")

        tram($(section[index - 1] + ' .story-desc .desc1'))
            .wait(500)
            .then({ opacity: 1 })

        tram($(section[index - 1] + ' .story-desc .desc2'))
            .wait(1600)
            .then({ opacity: 1 })
    }
}