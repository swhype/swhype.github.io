$(function(){
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

		// Play videos on hover
	$('.animation-indicator').hover(
		function() {
			// play the video and hide the indicator
			$(this).fadeOut(100);
			$(this).next().get(0).play();
		}
	);
	$('video').mouseout(
		function () {
			$(this).get(0).pause();
			$(this).prev().fadeIn(100);
		}
	);


});