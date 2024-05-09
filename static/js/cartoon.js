// var _staticPath = '/images/';
var _staticPath = '//image.tw.ncsoft.com/lineage2/';

// cartoon list ----------------------------------------------------
var cartoonData = {
    cartoonList: [
        {
            "id": "hello",
            "title": "HELLO!! 新天堂II",
            "path": "hello/",
            "img": _staticPath + "cartoon/thumb/thumb_hello.jpg",
            "pages": 7,
            "new": 0,
            "end": 0
        }, {
            "id": "lastday",
            "title": "最終之日",
            "path": "lastday/",
            "img": _staticPath + "cartoon/thumb/thumb_last_day.jpg",
            "pages": 24,
            "new": 0,
            "end": 24
        }, {
            "id": "plus",
            "title": "新天堂II + PLUS",
            "path": "plus/",
            "img": _staticPath + "cartoon/thumb/thumb_plus.jpg",
            "pages": 39,
            "new": 0,
            "end": 39
        }, {
            "id": "onoff",
            "title": "新天堂II ON&OFF",
            "path": "onoff/",
            "img": _staticPath + "cartoon/thumb/thumb_onoff.jpg",
            "pages": 31,
            "new": 0,
            "end": 0
        }
    ]
}
new Vue({
    el: '#cartoonList',
    data: cartoonData,
    computed: {
        reverseCartoonList: function() {
            return this.cartoonList.slice().reverse();
        }
    }
})

// cartoon view ----------------------------------------------------
if ($('#cartoonView').length > 0) {
    new Vue({
        el: '#cartoonView',
        data: cartoonData
    })
}

// cartoon view prev, next ----------------------------------------------------
var url = window.location.pathname;
var fileName = window.location.pathname.match(/[^\/]+$/)[0];
var extIndex = fileName.lastIndexOf('.');
if (extIndex != -1) {
    fileName = '.' + fileName.substr(extIndex + 1, fileName.length);
}
if (url.indexOf("view") != -1) {
    var articleId = parseInt(url.split("view")[1].split('.' + fileName)[0]);
}

function setPrevNextArticle(category) {
    if (articleId == 1) {
        $('.page-prev').addClass('disabled');
        $('.page-next').attr('href', 'view' + (articleId + 1) + fileName);
        // console.log('first page')
    } else if (articleId == cartoonData.cartoonList[category - 1].pages) {
        $('.page-next').addClass('disabled');
        $('.page-prev').attr('href', 'view' + (articleId - 1) + fileName);
        // console.log('last page')
    } else {
        $('.page-prev').attr('href', 'view' + (articleId - 1) + fileName);
        $('.page-next').attr('href', 'view' + (articleId + 1) + fileName);
        // console.log('page 2')
    }
    // console.log(cartoonData.cartoonList[category - 1].pages);
    // console.log(articleId);
    // console.log(fileName);
}

// cartoon view title
function setViewTitle(category) {
    $('.view-title').text(cartoonData.cartoonList[category - 1].title + ' 第' + articleId + '集')
}

function makeCategoryPages(category) {
    new Vue({
        el: '#categoryPages',
        data: cartoonData,
        computed: {
            categoryPages: function() {
                return this.cartoonList[category - 1];
            }
        }
    })
    $('#categoryPages').find('.btn-cartoon').eq(articleId - 1).addClass('is-active');
}

function setCartoonBottom(category) {
    $('.btn-list').attr('href', '../list.aspx#' + cartoonData.cartoonList[category - 1].id);
}

function setCategoryList(category) {
    // slick
    $('.category-list').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 300,
        responsive: [{
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });
    $('.category-list').slick('slickRemove', cartoonData.cartoonList.length - category);
}

function displayViewPage(category) {
    setPrevNextArticle(category)
    setViewTitle(category)
    makeCategoryPages(category, articleId)
    setCategoryList(category)
    setCartoonBottom(category)
}

(function($) {

    var currentScrollTop = 0,
        documentHeight = 0,
        windowHeight = $(window).height(),
        headerHeight = $('.wrap-header').height(),
        btnNextHeight = $('.page-next').height()
        $btnPrevNext = $('.cartoon-prev-next')

    function prevNextScroll(st, dh, wh){
        if($(window).width() > 960){
            if(st > dh - wh - headerHeight - btnNextHeight ){
                $btnPrevNext.fadeOut(300);
            }else{
                $btnPrevNext.fadeIn(300);
            }
        }else{
            $btnPrevNext.fadeIn(300);
        }
    }

    $(window).on({
        'resize': function(){
            windowHeight = $(window).height();
        },
        'scroll': function(){
            currentScrollTop = $(window).scrollTop();
            documentHeight = $(document).height();

            prevNextScroll(currentScrollTop, documentHeight, windowHeight)
        }
    });

    // lazyload ----------------------------------------------------
    $(".lazy").lazyload({
        effect: "fadeIn"
    });

    // share cartoon ----------------------------------------------------
    $('.share-facebook').click(function(e) {
        e.preventDefault();

        var url = location.href;
        var title = $('title').text();
        var desc = $('.view-title').text();
        var picture = $('.cartoon-view-wrap').find('img:first-child').attr('data-original');
        var pictureParam;

        if (picture == undefined) {
            pictureParam = ''
        } else {
            pictureParam = '&picture=' + picture;
        }

        window.open('https://www.facebook.com/share.php?u=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title) + '&description=' + encodeURIComponent(desc) + pictureParam, 'share', 'toolbar=0,status=0,width=572,height=300');

        // console.log(url);
        // console.log(title);
        // console.log(desc);
        // console.log(picture);
    });

    if (location.hash) {
        var sectionTop = $(location.hash).offset().top;
        $('html, body').animate({ scrollTop: sectionTop - 20 }, 100);
    }

}(jQuery));
