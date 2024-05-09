// index.js
(function(window) {
    // promotion
    var promoData = {
        promoList: Static_8_9_1_L2CWebMainBanner,
        target: ''
    }
    new Vue({
        el: '#promoList',
        data: promoData,
        methods: {
            linkTarget: function(idx) {
                if (this.promoList[idx].link.indexOf('tw.ncsoft.com') > -1) {
                    return this.target = ''
                } else {
                    return this.target = '_blank'
                }
            }
        }
    })

    // news list
    var newsData = {
        newsList: Static_8_8_1_L2CWebMainNews
    }
    new Vue({
        el: '#newsList',
        data: newsData,
        methods: {
            iconClass: function(index) {
                var icon = this.newsList[index].icon.toLowerCase()
                var d = new Date();
                var today = d.getFullYear() + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + '/' + ('0' + d.getDate()).slice(-2)
                var evtdate = this.newsList[index].date.replace(/\./g, '/')
                var evtdate_new = new Date(evtdate)
                evtdate_new.setDate(evtdate_new.getDate() + 3)
                
                if(Date.parse(today) - Date.parse(evtdate_new) > 0)
                {
                	icon = 'none';
                }
                return 'icon-' + icon
            },
            date2rows: function(index) {
                var dateAry = this.newsList[index].date.split('.')
                return dateAry[0] + '.' + dateAry[1] + '.' + dateAry[2]
            }
        }
    })
    
    // forum list
    new Vue({
        el: '#forumList',
        data: {
          forumList: []
        },
        created: function() {
            var me = this;
            jQuery.ajax({
                type: "POST",
                url: "/lineage2/common/inc/index/gamerforum.ashx",
                dataType: "json",
                success: function (data) {
                    me.forumList = data;
                },
                error: function () {
                    return;
                }
            });
        },
        methods: {
            date2rows: function(index) {
                var dateAry = this.newsList[index].date.split('.')
                return dateAry[0] + '.' + dateAry[1] + '.' + dateAry[2];
            }
        }
    })
})(window);

$(function() {
    var isMobile = navigator.userAgent.match(/(iPhone|iPad|Android)/)

    // promotion banner
    var $promoList = $('#promoList');

    if (isMobile) $promoList.find('.item-bg-movie').remove();

    var resizeMovie = function() {
        var _h = $promoList.height(),
            _w = $promoList.width(),
            _vw = parseInt(_h * 16 / 9),
            //16:9
            _vmargin = (_w - _vw) / 2;

        // video의 width가 작을 경우
        if (_w > _vw) {
            _h = _w * 9 / 16;
            _vw = _w;
            _vmargin = 0;
        }

        $promoList.find('video').css({
            'width': _vw + 'px',
            'height': _h + 'px',
            'margin-left': _vmargin + 'px'
        });
    };

    $promoList.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {

        var currentVideo = $('.slick-current', $promoList).find('video');

        $("video", $promoList).each(function() {
            $(this).get(0).pause();
        });

        if (currentVideo.length == 1) {
            resizeMovie();
            $(currentVideo).get(0).play();
        }
    });

    $promoList.slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true
    });

    // beginner
    $('.beginner-list').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        // speed: 300,
        responsive: [{
            breakpoint: 960,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    var waypoints = $('#section-beginner').waypoint({
        handler: function() {
            $('.beginner-list li').toggleClass('is-active');
            $('.beginner-list li a').toggleClass('is-active');
            $('#section-beginner .desc').toggleClass('is-active');
            this.destroy()
        },
        offset: '50%'
    })

    // magnificPopup
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    // scroll
    var currentScrollTop = 0
    var $promoList = $('#promoList'),
        $promoArrow = $promoList.find('.slick-arrow'),
        $beginnerChar = $('#beginner-char')

    var promoScroll = function(st) {
        $promoList.css({
            'transform': 'translateY(' + (st * -0.1) + 'px)'
        })
        $promoArrow.css({
            'opacity': (st / 100) * -1 + 1
        })
        $('.item-bg-pc').css({
            'opacity': (st / 1000) * -1 + 1
        })
        $('.item-info-wrap').css({
            'transform': 'translateY(' + (st * -0.2) + 'px)',
            'opacity': (st / 300) * -1 + 1
        })
    }

    var charScroll = function(st) {
        $beginnerChar.css({
            'transform': 'translateY(' + (-10 - st * 0.1) + 'px)',
            'opacity': (st * 0.002) - 0.5
        })
    }

    $(window).on({
        'scroll': function() {
            currentScrollTop = $(window).scrollTop();

            if (currentScrollTop <= 600) {
                if (!isMobile) promoScroll(currentScrollTop);
            }
            if (!isMobile) charScroll(currentScrollTop);
        },
        'resize': function() {
            if ($('video', $promoList).length != 0) {
                resizeMovie();
            }
        }
    })

    // submission
    $('.btn-submission').magnificPopup();
})
