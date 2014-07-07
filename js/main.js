$(document).ready(function() {
	$("section#post-list > article > div.post-excerpt").hide();
	$("section#post-list > article > header").click(function(event) {
		event.preventDefault();
		$("section#post-list > article > div.post-excerpt").slideUp();
		if ($(this).next("div.post-excerpt").is(":hidden")) {
			$(this).next("div.post-excerpt").slideDown();
		}
	});
});
