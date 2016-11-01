$(function() {
	$(".btn").on("click", function(e) {
		e.preventDefault();

		var $this = $(this);
		var container = $this.closest(".slider");
		var list = container.find(".slider-list");
		var items = container.find(".slide");
		var activeSlide = items.filter(".active");
		var nextSlide = activeSlide.eq(2).next();
		var prevSlide = activeSlide.eq(0).prev();
		var firstSlide = items.first();
		var lastSlide = items.last();
		var sliderOffset = container.offset().left;
		var reqPos = 0;
		var slideMargin = parseInt(items.css("margin-right"));
		var slideWidth = parseInt(items.css("width"));

		// console.log(nextSlide);

		if ($(this).hasClass("next-btn")) {
			if (nextSlide.length) {
				var shiftOfItem = slideWidth + slideMargin;
				
				// shift container by item size + margin of item
				reqPos = nextSlide.offset().left - sliderOffset - 2 * shiftOfItem;
				nextSlide.addClass("active");
				activeSlide.eq(0).removeClass("active");
			}

			// lock button style
			//
			// end of slider
			if (!nextSlide.next().length) {
				// lock pressed button
				$(".next-btn").mouseover(function() {
					$(this).css({
						"color": "#e5dcd4",
						"border-color": "#e5dcd4"
					});
				}).mouseout(function() {
					$(this).css({
						"color": "#e5dcd4",
						"border-color": "#e5dcd4"
					});
				});
			} else {
				// unlock the second button
				$(".prev-btn").css({
					"color": "#d8bba3",
					"border-color": "#d8bba3"
				}).mouseover(function() {
					$(this).css({
						"color": "#56534c",
						"border-color": "#56534c"
					});
				}).mouseout(function() {
					$(this).css({
						"color": "#d8bba3",
						"border-color": "#d8bba3"
					});
				});
			}
		} else {
			if (prevSlide.length) {
				reqPos = prevSlide.offset().left - sliderOffset;
				prevSlide.addClass("active");
				activeSlide.eq(2).removeClass("active");
			}

			// lock button style
			//
			// begin of slider
			if (!prevSlide.prev().length) {
				// lock pressed button
				$(".prev-btn").mouseover(function() {
					$(this).css({
						"color": "#e5dcd4",
						"border-color": "#e5dcd4"
					});
				}).mouseout(function() {
					$(this).css({
						"color": "#e5dcd4",
						"border-color": "#e5dcd4"
					});
				});
			} else {
				// unlock the second button
				$(".next-btn").css({
					"color": "#d8bba3",
					"border-color": "#d8bba3"
				}).mouseover(function() {
					$(this).css({
						"color": "#56534c",
						"border-color": "#56534c"
					});
				}).mouseout(function() {
					$(this).css({
						"color": "#d8bba3",
						"border-color": "#d8bba3"
					});
				});
			}
		}

		list.animate({
			"left": "-=" + reqPos + "px"
		}, 1000);
	});
});