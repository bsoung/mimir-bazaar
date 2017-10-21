$(() => {
	$(window).scroll(function() {
		// set distance user needs to scroll before we fadeIn navbar
		if ($(this).scrollTop() > 300) {
			$("header").css("display", "flex");
			$("header").fadeIn("slow");
		} else {
			$("header").fadeOut(1000);
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 301) {
			$("header").fadeIn("slow");
			clearTimeout($.data(this, "scrollCheck"));

			$.data(
				this,
				"scrollCheck",
				setTimeout(function() {
					$("header").fadeOut(1000);
				}, 1000)
			);
		}
	});
});
