$(function() {

	var $oParent = $('.time-axis'),
		$oLine = $oParent.find('.line span'),
		$aItem = $oParent.find('.item');

	var windowH = $(window).height(),
		itemH = $aItem.outerHeight(true);

	Animate();

	$(window).on('scroll',Animate);

	function Animate() {
		var top = $(window).scrollTop();
		for (var i = 0; i < $aItem.length; i++) {
			var $this = $aItem.eq(i);
			if (windowH+top >= $this.position().top) {
				var thisText = $this.find('.text'),
					thisImg = $this.find('.img');

				thisText.stop().animate({left: 0});
				thisImg.stop().animate({opacity: 1});

				$oLine.stop().animate({height: (i+1) * itemH});

			}
		}
	};

});