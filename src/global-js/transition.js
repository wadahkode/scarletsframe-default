var transitioning = 0;
function animatePageTransition(views){
	if(views.lastSibling !== void 0)
		$(views.lastSibling).animateKey('scaleDown', 0.6, function(){
			$(this).addClass('disable-anim');
		});

	$(views.showedSibling).removeClass('disable-anim').animateKey('scaleUpDown', {
		duration:0.6,
		delay:0.3,
		visible:false
	});

	// Make sure showed element is not hidden after animation
	clearTimeout(transitioning);
	transitioning = setTimeout(function(){
		transitioning = false;
		$(views.relatedDOM).removeClass('disable-anim');
	}, 1000);
}