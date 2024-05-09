// ui.js
$(function(){
	// markup footer
	$('#nctFooter').addClass('rwd lineage2');
	$('#nctFooter').append('<div class="ncFooterMini">Copyright © NCSOFT Corporation. All Rights Reserved.</div>')

	// parallax
	$('.section-obj').parallax({
        'elements': [
          {
              'selector': '.parallax',
              'properties': {
                  'x': {
                      'left': {
                          'initial': 50,
                          'multiplier': 0.006,
                          'unit': '%'
                      }
                  },
                  'y': {
                      'top': {
                          'initial': 0,
                          'multiplier': 0.006,
                          'unit': '%'
                      }
                  }
              }
          },
        ]
    });
})

function startAnimation(){
	var tl = new TimelineLite();

	tl
	.fromTo($('.logo-l2'), 1, {x: 0, y: 60, autoAlpha: 0}, {x: 0, y: 0, autoAlpha: 1, delay: 0, ease:Expo.easeOut})
	.fromTo($('.logo-classic'), 1, {x: 0, y: 60, autoAlpha: 0}, {x: 0, y: 0, autoAlpha: 1, delay: -0.9, ease:Expo.easeOut})
	.fromTo($('.obj-update-l2'), 1, {x: 0, y: 60, autoAlpha: 0}, {x: 0, y: 0, autoAlpha: 1, delay: -1, ease:Expo.easeOut})
	.fromTo($('.obj-update-classic'), 1, {x: 0, y: 60, autoAlpha: 0}, {x: 0, y: 0, autoAlpha: 1, delay: -0.9, ease:Expo.easeOut})
	.fromTo($('.btn-l2'), 1, {x: 0, y: 60, autoAlpha: 0}, {x: 0, y: 0, autoAlpha: 1, delay: -0.9, ease:Expo.easeOut})
	.fromTo($('.btn-update-l2'), 1, {x: 0, y: 60, autoAlpha: 0}, {x: 0, y: 0, autoAlpha: 1, delay: -0.9, ease:Expo.easeOut})
    .fromTo($('.btn-event-l2'), 1, {x: 0, y: 60, autoAlpha: 0}, {x: 0, y: 0, autoAlpha: 1, delay: -0.9, ease:Expo.easeOut})
	.fromTo($('.btn-preview-l2'), 1, {x: 0, y: 60, autoAlpha: 0}, {x: 0, y: 0, autoAlpha: 1, delay: -0.9, ease:Expo.easeOut})
	.fromTo($('.btn-classic'), 1, {x: 0, y: 60, autoAlpha: 0}, {x: 0, y: 0, autoAlpha: 1, delay: -0.9, ease:Expo.easeOut})
	.fromTo($('.btn-update-classic'), 1, {x: 0, y: 60, autoAlpha: 0}, {x: 0, y: 0, autoAlpha: 1, delay: -0.9, ease:Expo.easeOut})
	.fromTo($('.btn-event-classic'), 1, {x: 0, y: 60, autoAlpha: 0}, {x: 0, y: 0, autoAlpha: 1, delay: -0.9, ease:Expo.easeOut})
	.fromTo($('.btn-preview-classic'), 1, {x: 0, y: 60, autoAlpha: 0}, {x: 0, y: 0, autoAlpha: 1, delay: -0.9, ease:Expo.easeOut})

	.fromTo($('.obj-fire'), 3, {x: 300, y: 100, autoAlpha: 0}, {x: 0, y: 0, autoAlpha: 1, delay: -2, ease:Expo.easeOut})
	.fromTo($('.obj-stone'), 3, {x: -300, y: 100, autoAlpha: 0}, {x: 0, y: 0, autoAlpha: 1, delay: -3, ease:Expo.easeOut})

	.fromTo($('.obj-update'), 0.7, {scale: 2.6, y: 0, autoAlpha: 0}, {scale: 1, y: 0, autoAlpha: 1, delay: -1.5, ease:Expo.easeOut})
}

