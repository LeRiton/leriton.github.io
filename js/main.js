$(document).ready(function() {
	$("section#post_list > article > div.post_excerpt").hide();
	$("section#post_list > article > header").click(function(event) {
		event.preventDefault();
		$("section#post_list > article > div.post_excerpt").slideUp();
		if ($(this).next("div.post_excerpt").is(":hidden")) {
			$(this).next("div.post_excerpt").slideDown();
		}
	});
});