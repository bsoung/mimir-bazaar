$(() => {
	// $("header").hide();
	$(window).scroll(function() {
		// set distance user needs to scroll before we fadeIn navbar
		if ($(this).scrollTop() > 300) {
			$("header").addClass("flex");
			$("header").fadeIn("slow", function() {
				// clearTimeout($.data(this, "scrollCheck"));
				// $.data(
				// 	this,
				// 	"scrollCheck",
				// 	setTimeout(function() {
				// 		$("header").fadeOut("slow");
				// 	}, 2000)
				// );
			});
		} else {
			$("header").fadeOut("slow");
		}
	});
});
