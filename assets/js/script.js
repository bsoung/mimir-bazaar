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

	$(".nav-contact-link").click(function() {
		$("html,body").animate(
			{
				scrollTop: $(".contact").offset().top
			},
			"slow"
		);
	});

	$(".nav-potions-link").click(function() {
		$("html,body").animate(
			{
				scrollTop: $(".potions").offset().top
			},
			"slow"
		);
	});

	$(".nav-packages-link").click(function() {
		$("html,body").animate(
			{
				scrollTop: $(".packages").offset().top
			},
			"slow"
		);
	});

	$(".nav-reviews-link").click(function() {
		$("html,body").animate(
			{
				scrollTop: $(".testimonials").offset().top
			},
			"slow"
		);
	});
});
