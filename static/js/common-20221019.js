// common.js

// rewrite SSL
/*
var pathname = $(location).attr('pathname').toLowerCase();
var Url = $(location).attr('href');

if ($(location).attr('protocol') == 'http:' && pathname.indexOf('/lineage2/account/') == 0) {	
	Url = Url.replace('http:', 'https:');
	location.href = Url;
} else if ($(location).attr('protocol') == 'https:' && pathname.indexOf('/lineage2/account/') < 0) {
	Url = Url.replace('https:', 'http:');
	location.href = Url;
}
*/
// markup template
var markupNaviList = [
	'<ul class="nav-list">',
	'  <li><a href="/lineage2/news/notice/list.aspx">新聞活動</a>',
	'    <ul class="sub-list">',
	'      <li><a href="/lineage2/news/notice/list.aspx">公告訊息</a></li>',
	'      <li><a href="/lineage2/news/event/list.aspx">活動情報</a></li>',
	'    </ul>',
	'  </li>',
	'  <li><a href="/lineage2/intro/story.aspx">遊戲介紹</a>',
	'    <ul class="sub-list">',
	'      <li><a href="/lineage2/intro/story.aspx">故事背景</a></li>',
	'      <li><a href="/lineage2/intro/race.aspx">種族介紹</a></li>',
	'      <li><a href="/lineage2/intro/class.aspx">職業介紹</a></li>',
	'      <li><a href="/lineage2/intro/screenshot.aspx">遊戲畫面</a></li>',
	'      <li><a href="/lineage2/intro/artwork.aspx">原畫欣賞</a></li>',
	'      <li><a href="/lineage2/intro/wallpaper.aspx">桌布下載</a></li>',
	'    </ul>',
	'  </li>',
	'  <li><a href="/lineage2/board/bbs/list.aspx">玩家社群</a>',
	'    <ul class="sub-list">',
	'      <li><a href="/lineage2/board/bbs/list.aspx">練功經驗談</a></li>',
	'      <li><a href="/lineage2/board/qna/list.aspx">你問我答</a></li>',
	'      <li><a href="/lineage2/board/server/list.aspx">各伺服器討論區</a></li>',
	'      <li><a href="/lineage2/board/blood/castle.aspx">血盟查詢</a></li>',
	'      <li><a href="/lineage2/cartoon/list.aspx">漫畫專區</a></li>',
	'    </ul>',
	'  </li>',
	'  <li><a href="/lineage2/user/policy.aspx">會員專區</a>',
	'    <ul class="sub-list">',
	'      <li><a href="/lineage2/user/policy.aspx">遊戲管理規則</a></li>',
	'      <li><a href="/lineage2/user/agreement.aspx">服務合約書</a></li>',
	'      <li><a href="https://help.plaync.com/qna/ticket?service=lin2nct" target="_blank">1：1諮詢</a></li>',
	'    </ul>',
	'  </li>',
    '  <li><a href="/lineage2/download/index.aspx">下載專區</a>',
	'    <ul class="sub-list">',
	'      <li><a href="/lineage2/download/index.aspx">遊戲主程式下載</a></li>',
	'      <li><a href="/lineage2/beginner/otp.aspx">兩步驟驗證說明</a></li>',
	'    </ul>',
	'  </li>',
    '  <li><a href="https://store.plaync.com/store/lin2nct" target="_blank">新天堂II SHOP↗</a>',
	'    <ul class="sub-list">&nbsp;</ul>',
	'  </li>',
    '  <li><a href="javascript:void(0);" onclick="window.open(\'https://purpleon.plaync.com/webplay/lin2\', \'\', \'width=1280,height=824\')">PURPLE On遊玩↗</a>',
	'    <ul class="sub-list">&nbsp;</ul>',
	'  </li>',
	'</ul>'
]
// markup template - mobile
var markupNaviListM = [
	'<ul class="nav-list">',
	'  <li><a href="/lineage2/news/notice/list.aspx">新聞活動</a>',
	'    <ul class="sub-list">',
	'      <li><a href="/lineage2/news/notice/list.aspx">公告訊息</a></li>',
	'      <li><a href="/lineage2/news/event/list.aspx">活動情報</a></li>',
	'    </ul>',
	'  </li>',
	'  <li><a href="/lineage2/intro/story.aspx">遊戲介紹</a>',
	'    <ul class="sub-list">',
	'      <li><a href="/lineage2/intro/story.aspx">故事背景</a></li>',
	'      <li><a href="/lineage2/intro/race.aspx">種族介紹</a></li>',
	'      <li><a href="/lineage2/intro/class.aspx">職業介紹</a></li>',
	'      <li><a href="/lineage2/intro/screenshot.aspx">遊戲畫面</a></li>',
	'      <li><a href="/lineage2/intro/artwork.aspx">原畫欣賞</a></li>',
	'      <li><a href="/lineage2/intro/wallpaper.aspx">桌布下載</a></li>',
	'    </ul>',
	'  </li>',
	'  <li><a href="/lineage2/board/bbs/list.aspx">玩家社群</a>',
	'    <ul class="sub-list">',
	'      <li><a href="/lineage2/board/bbs/list.aspx">練功經驗談</a></li>',
	'      <li><a href="/lineage2/board/qna/list.aspx">你問我答</a></li>',
	'      <li><a href="/lineage2/board/server/list.aspx">各伺服器討論區</a></li>',
	'      <li><a href="/lineage2/board/blood/castle.aspx">血盟查詢</a></li>',
	'      <li><a href="/lineage2/cartoon/list.aspx">漫畫專區</a></li>',
	'    </ul>',
	'  </li>',
	'  <li><a href="/lineage2/user/policy.aspx">會員專區</a>',
	'    <ul class="sub-list">',
	'      <li><a href="/lineage2/user/policy.aspx">遊戲管理規則</a></li>',
	'      <li><a href="/lineage2/user/agreement.aspx">服務合約書</a></li>',
	'      <li><a href="https://help.plaync.com/qna/ticket?service=lin2nct" target="_blank">1：1諮詢</a></li>',
	'    </ul>',
	'  </li>',
    '  <li><a href="/lineage2/download/index.aspx">下載專區</a>',
	'    <ul class="sub-list">',
	'      <li><a href="/lineage2/download/index.aspx">遊戲主程式下載</a></li>',
	'      <li><a href="/lineage2/beginner/otp.aspx">兩步驟驗證說明</a></li>',
	'    </ul>',
	'  </li>',
    '  <li><a href="https://store.plaync.com/store/lin2nct" target="_blank">新天堂II SHOP↗</a></li>',
    '  <li><a href="https://purpleon.plaync.com/" target="_blank">PURPLE On↗</a></li>',
	'</ul>',
    '<div class="nav-ncservice-list">',
    '  <a href="/">NCSOFT服務</a>',
    '  <a href="https://help.plaync.com" target="_blank">顧客支援</a>',
    '</div>',
    '<ul class="nav-ncgame-list">',
    '  <li class="nav-ncgame-item-title">PC遊戲</li>',
    '  <li><a href="/bns">劍靈</a></li>',
    '  <li><a href="/aion">AION</a></li>',
    '  <li><a href="/lineage2">新天堂II</a></li>',
    '  <li class="nav-ncgame-item-title">Mobile遊戲</li>',
    '  <li><a href="https://bns2.plaync.com/zh-tw/index">劍靈2</a></li>',
    '  <li><a href="https://tw.ncsoft.com/lineage2m/">天堂2M</a></li>',
    '</ul>'
]

function ValidateSearchKey(SearchKey) {
    return /^[a-zA-Z0-9\u4E00-\u9FA5]{2,12}$/.test(SearchKey);
}

function showNaviList(){
	markupNaviList = markupNaviList.join('');
    markupNaviListM = markupNaviListM.join('');
	$('.main-nav-container').find('.wrap-nav-list').append(markupNaviList);
    $('.mobile-navi-container').find('.wrap-nav-list').append(markupNaviListM);
}

$(function(){
	showNaviList();

	// markup rwd footer
	$('#nctFooter').addClass('rwd lineage2');
	$('#nctFooter').append('<div class="ncFooterMini">© NCSOFT Corporation. Licensed to NC Taiwan Co., Ltd. All Rights Reserved.</div>');
})

// open popup
function openPopup( url, name, width, height, ObjScroll ){
    if ( !url ) return;
    name = name || 'ncsoft';
    width = width || 500;
    height = height || 700;
    ObjScroll = ObjScroll || 'no';

    window.open( url, name, 'width='+ width +' , height=' + height +' , scrollbars=' + ObjScroll).focus();
}

// ui
$(function(){
	// font
	// var isMobile = navigator.userAgent.match(/(iPhone|iPad|Android)/)
	// var fontsHtml = '<link href="//fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">\
	// 				<style type="text/css">@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css);</style>'

	//if(!isMobile) $('head').append(fontsHtml);

	// nav
	var $navContainer = $('.main-nav-container'),
		$wrapNavHeader = $('.wrap-nav-header'),
		$wrapNavList = $('.wrap-nav-list'),
		$navList = $('.nav-list'),
		$navSub = $('.sub-list'),
		$promotionList = $('.promotion-list')

	// nav current
	$.fn.navCurrent = function (nav, sub){
		this.each(function(){
			$(this).children('li').eq(nav).addClass('is-current');
			$(this).children('li').eq(nav).find($navSub).find('li').eq(sub).addClass('is-current');
		})
	}

	// nav main
	$navList.hover(function(){
		$navContainer.addClass('is-active');
		$promotionList.find('.item-info-wrap').addClass('is-active');
	}, function(){
		$navContainer.removeClass('is-active');
		$promotionList.find('.item-info-wrap').removeClass('is-active');
	})
	
	// nav sub
	$navSub.hover(function(){
	    $(this).parent().addClass('is-active');
	}, function(){
		$(this).parent().removeClass('is-active');
	})

	// mobile nav toggle
	$('.nav-toggle').click(function(e){
		e.preventDefault();
		$('#mobile-navi-wrap').addClass('is-slide-in');
		$('html, body').addClass('show-mobile-gnb-wrap');
	})
	$('.nav-slide-close').click(function(e){
		e.preventDefault();
		$('#mobile-navi-wrap').removeClass('is-slide-in');
		$('html, body').removeClass('show-mobile-gnb-wrap');
	})
	
	// nav - if index 
	var currentScrollTop = 0,
		url = window.location.pathname,
		urlAry = url.split('/'),
		flag = ''

	// console.log(urlAry[1]);
	
	var navInit = function(){
		if(urlAry[2] == '' || urlAry[2].indexOf('index') != -1){
			flag = 'index';
		}else{
			if($(window).width() > 959) $navContainer.find('.wrap-nav-header').hide();
			$navContainer.addClass('is-sticky');
			$wrapNavList.addClass('is-sticky');
			$wrapNavHeader.find('.nav-logo').hide();
		}

		if($(window).width() > 959){
            $navContainer.css({ 'top': ($('#nctGnb div').hasClass('infoBar')) ? '94px' : '40px' })
		}else{
			$navContainer.css({ 'top':0 })
		}
	}
	navInit();

	// nav - sticky
	var navScroll = function(st){
		if($(window).width() > 959){
			if(currentScrollTop > 40){
				$navContainer.css({ 'top':0 })
				if(flag == 'index') $navContainer.find('.wrap-nav-header').hide();
			}else {
                $navContainer.css({ 'top': ($('#nctGnb div').hasClass('infoBar')) ? '94px' : (40 - st) })
				if(flag == 'index') $navContainer.find('.wrap-nav-header').show();
			}
		}else{
			$navContainer.css({ 'top':0 })
			$navContainer.find('.wrap-nav-header').show();
		}
		
		if(flag == 'index'){
			if(currentScrollTop > 40){
				$navContainer.addClass('is-sticky');
				$wrapNavList.addClass('is-sticky');
			}else {
				$navContainer.removeClass('is-sticky');
				$wrapNavList.removeClass('is-sticky');
			}
		}
	}
    
    setTimeout(function() {
        if ($('#nctGnb div').hasClass('infoBar')) {
            $navContainer.css({ 'top': '94px' });
        }
    }, 1000);

	$(window).on({
		'resize': function(){
			navInit();
			navScroll();
		},
		'scroll': function(){
			currentScrollTop = $(window).scrollTop();

			navInit();
			navScroll(currentScrollTop);
		}
	});

	// nav security popup
	$('.security').click(function(e) {
		e.preventDefault();
		var url = 'https://' + location.host + '/event/lineage2/accountcenter/security_apply_virtual_00.asp'
		openPopup('/event/lineage2/accountcenter/security_apply_virtual_00.asp', 'securityPop', 1117, 700);
	});

	// board search
	$('.c-btn-search-show').click(function(e) {
		e.preventDefault();
		$(this).hide();
		$('.input-search-box, .c-btn-search-hide').show();
		$('.input-search').focus();
	});
	$('.c-btn-search-hide').click(function(e) {
		e.preventDefault();
		$(this).hide();
		$('.input-search-box').hide();
		$('.c-btn-search-show').show();
	});
});
