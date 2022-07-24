/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Header Search
4. Init Menu
5. Init Home Slider
6. Init Courses Slider
7. Init Milestones
8. Init Accordions


******************************/

$(document).ready(function () {
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var menu = $('.menu');
	var menuActive = false;
	var header = $('.header');
	var burger = $('.hamburger');
	var ctrl = new ScrollMagic.Controller();

	setHeader();

	$(window).on('resize', function () {
		setHeader();
	});

	$(document).on('scroll', function () {
		setHeader();
	});

	initHeaderSearch();
	initMenu();
	initHomeSlider();
	initCoursesSlider();
	initMilestones();
	initAccordions();

	/* 

	2. Set Header

	*/

	function setHeader() {
		if ($(window).scrollTop() > 100) {
			header.addClass('scrolled');
		}
		else {
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Header Search

	*/

	function initHeaderSearch() {
		if ($('.search_button').length) {
			$('.search_button').on('click', function () {
				if ($('.header_search_container').length) {
					$('.header_search_container').toggleClass('active');
				}
			});
		}
	}

	/* 

	4. Init Menu

	*/

	function initMenu() {
		if ($('.menu').length) {
			var menu = $('.menu');
			if ($('.hamburger').length) {
				burger.on('click', function () {
					if (menuActive) {
						closeMenu();
					}
					else {
						openMenu();

						$(document).one('click', function cls(e) {
							if ($(e.target).hasClass('menu_mm')) {
								$(document).one('click', cls);
							}
							else {
								closeMenu();
							}
						});
					}
				});
			}
		}
	}

	function openMenu() {
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu() {
		menu.removeClass('active');
		menuActive = false;
	}

	/* 

	5. Init Home Slider

	*/

	function initHomeSlider() {
		if ($('.home_slider').length) {
			var homeSlider = $('.home_slider');
			homeSlider.owlCarousel(
				{
					items: 1,
					loop: true,
					autoplay: true,
					autoplayTimeout: 8000,
					dots: false,
					nav: false,
					smartSpeed: 1200
				});

			if ($('.home_slider_prev').length) {
				var prev = $('.home_slider_prev');
				prev.on('click', function () {
					homeSlider.trigger('prev.owl.carousel');
				});
			}

			if ($('.home_slider_next').length) {
				var next = $('.home_slider_next');
				next.on('click', function () {
					homeSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	6. Init Courses Slider

	*/

	function initCoursesSlider() {
		if ($('.courses_slider').length) {
			var coursesSlider = $('.courses_slider');
			coursesSlider.owlCarousel(
				{
					items: 3,
					loop: true,
					autoplay: true,
					autoplayTimeout: 8000,
					nav: false,
					dots: false,
					smartSpeed: 1200,
					margin: 30,
					responsive:
					{
						0:
						{
							items: 1
						},
						768:
						{
							items: 2
						},
						992:
						{
							items: 3
						}
					}
				});

			if ($('.courses_slider_prev').length) {
				var prev = $('.courses_slider_prev');
				prev.on('click', function () {
					coursesSlider.trigger('prev.owl.carousel');
				});
			}

			if ($('.courses_slider_next').length) {
				var next = $('.courses_slider_next');
				next.on('click', function () {
					coursesSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	7. Initialize Milestones

	*/

	function initMilestones() {
		if ($('.milestone_counter').length) {
			var milestoneItems = $('.milestone_counter');

			milestoneItems.each(function (i) {
				var ele = $(this);
				var endValue = ele.data('end-value');
				var eleValue = ele.text();

				/* Use data-sign-before and data-sign-after to add signs
				infront or behind the counter number (+, k, etc) */
				var signBefore = "";
				var signAfter = "";

				if (ele.attr('data-sign-before')) {
					signBefore = ele.attr('data-sign-before');
				}

				if (ele.attr('data-sign-after')) {
					signAfter = ele.attr('data-sign-after');
				}

				var milestoneScene = new ScrollMagic.Scene({
					triggerElement: this,
					triggerHook: 'onEnter',
					reverse: false
				})
					.on('start', function () {
						var counter = { value: eleValue };
						var counterTween = TweenMax.to(counter, 4,
							{
								value: endValue,
								roundProps: "value",
								ease: Circ.easeOut,
								onUpdate: function () {
									document.getElementsByClassName('milestone_counter')[i].innerHTML = signBefore + counter.value + signAfter;
								}
							});
					})
					.addTo(ctrl);
			});
		}
	}

	/* 

	8. Init Accordions

	*/

	function initAccordions() {
		if ($('.accordion').length) {
			var accs = $('.accordion');

			accs.each(function () {
				var acc = $(this);

				if (acc.hasClass('active')) {
					var panel = $(acc.next());
					var panelH = panel.prop('scrollHeight') + "px";

					if (panel.css('max-height') == "0px") {
						panel.css('max-height', panel.prop('scrollHeight') + "px");
					}
					else {
						panel.css('max-height', "0px");
					}
				}

				acc.on('click', function () {
					if (acc.hasClass('active')) {
						acc.removeClass('active');
						var panel = $(acc.next());
						var panelH = panel.prop('scrollHeight') + "px";

						if (panel.css('max-height') == "0px") {
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else {
							panel.css('max-height', "0px");
						}
					}
					else {
						acc.addClass('active');
						var panel = $(acc.next());
						var panelH = panel.prop('scrollHeight') + "px";

						if (panel.css('max-height') == "0px") {
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else {
							panel.css('max-height', "0px");
						}
					}
				});
			});
		}
	}

	(function ($) {
		$.fn.countTo = function (options) {
			// merge the default plugin settings with the custom options
			options = $.extend({}, $.fn.countTo.defaults, options || {});
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(options.speed / options.refreshInterval),
				increment = (options.to - options.from) / loops;

			return $(this).each(function () {
				var _this = this,
					loopCount = 0,
					value = options.from,
					interval = setInterval(updateTimer, options.refreshInterval);

				function updateTimer() {
					value += increment;
					loopCount++;
					$(_this).html(value.toFixed(options.decimals));

					if (typeof (options.onUpdate) == 'function') {
						options.onUpdate.call(_this, value);
					}

					if (loopCount >= loops) {
						clearInterval(interval);
						value = options.to;

						if (typeof (options.onComplete) == 'function') {
							options.onComplete.call(_this, value);
						}
					}
				}
			});
		};

		$.fn.countTo.defaults = {
			from: 0,				// the number the element should start at
			to: 100,				// the number the element should end at
			speed: 1000,			// how long it should take to count between the target numbers
			refreshInterval: 100,	// how often the element should be updated
			decimals: 0,			// the number of decimal places to show
			onUpdate: null,			// callback method for every time the element is updated,
			onComplete: null,		// callback method for when the element finishes updating
		};
	})(jQuery);


	function isViewed(selector) {

		var viewport = $(window),
			item = $(selector);

		var viewTop = viewport.scrollTop(),
			viewBtm = viewport.scrollTop() + viewport.height(),
			itemTop = item.offset().top,
			itemBtm = item.offset().top + item.height();

		return ((itemTop < viewBtm) && (itemTop > viewTop));
	};

	var counter = setInterval(function () { countdown() }, 500);

	var countdown = function () {
		var random1 = Math.floor(Math.random() * (343 - 14 + 1)) + 14;
		var random2 = Math.floor(Math.random() * (5891 - 5627 + 1)) + 5627;
		var random3 = Math.floor(Math.random() * (686 - 28 + 1)) + 28;
		var random4 = Math.floor(Math.random() * (5627 - 4872 + 1)) + 4872;
		if (isViewed('.milestone')) {
			clearInterval(counter);
			$('.timer0').countTo({
				from: 0,
				to: 22,
				speed: 2000,
				refreshInterval: 20,
			});
			$('.timer1').countTo({
				from: 0,
				to: 90000,
				speed: 2000,
				refreshInterval: 20,
			});
			$('.timer2').countTo({
				from: 0,
				to: 50,
				speed: 2000,
				refreshInterval: 20,
			});
			$('.timer3').countTo({
				from: 0,
				to: 100,
				speed: 2000,
				refreshInterval: 20,
			});
		};
	}

});