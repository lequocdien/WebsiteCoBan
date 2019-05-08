$(function(){
	// if($(window).width() < 768)
	// {
	// 	$(".navbar-rules").addClass("navbar-rules-collapse");
	// 	$(".navbar-rules a").click(function(){
	// 		$(".navbar-rules button").click();
	// 	});
	// }
	// else{
	$(window).scroll(function(){
		if($("html,body").scrollTop() > 100)
		{
			$(".navbar-rules").addClass("navbar-rules-collapse");
		}
		else{
			$(".navbar-rules").removeClass("navbar-rules-collapse");
		}
	});
	// }
	$("body").scrollspy({
		target: ".navbar-rules",
		offset: 51
	});
	$(".navbar-rules a").click(function(){
		var a = $(this).attr("href");
		$("html,body").stop().animate({
			scrollTop: $(a).offset().top - 50},
			1500,
			"easeInOutExpo"
		);
		return false;
	});
	$(".nav_collapse-hide").click(function(){
		$(".navbar-collapse").collapse("hide");
	})
	

});