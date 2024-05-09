// loading.js
var $container = $('.sub-container');
var $loader = $('.loading-container');
var $loading = $('#loading');
var $logo = $('#loadedLogo');
var $text = $('.loading-txt');

var $status = $('#status');
var $progress = $('progress');

var loadImgLength = 0;
var loadedImageCount = 0;
var loadedPercent = 0;

var supportsProgress = $progress[0] &&
    // IE does not support progress
    $progress[0].toString().indexOf('Unknown') === -1;

$(function() {
    // imagesLoaded
    $container.imagesLoaded({ background: 'div' })
    .progress(onProgress)
    .always(onAlways);

    // imageCount = $container.find('img').length;
})

function updateProgress(value) {
    if (supportsProgress) {
        $progress.attr('value', value);
    } else {
        // if you don't support progress elem
        // $status.text(value + ' %');
        $text.text(value + '%');
        $loading.css({ 'width': value + '%'});
        $logo.css({ 'height': 100 - value + '%'});

    }
}

// triggered after each item is loaded
function onProgress(imgLoad, image) {
    loadImgLength = imgLoad.images.length - 1;
    loadedPercent = parseInt(loadedImageCount/loadImgLength * 100);

    // update progress element
    loadedImageCount++;
    updateProgress(loadedPercent);

    // console.log('loadedImageCount ' + loadedImageCount);
    // console.log('loadedPercent ' + loadedPercent + '%');
}

// hide status when done
function onAlways() {
    $loader.fadeOut(300);

    // story.js, race.js, class.js
    if($(window).width() >= 960) sectionFadeIn(1);
}














