(function(){
	var init = function(){
		var under = document.getElementById('under');
		var over = document.getElementById('over');
		var hdr = document.getElementsByTagName('header')[0];
		var oneB = document.getElementById('oneB');
		var oneF = document.getElementById('oneF');
		var intro = document.getElementById('intro');
		var start = document.getElementById('start');

		function resize(){
			// under.style.height = over.style.height = hdr.offsetHeight + 'px';
			under.style.width = over.style.width = hdr.offsetWidth + 'px';
		}
		function artHide(){
			// when a belt section is clicked hide the intro articles and reveal the matching text
			intro.classList.add('hide');
			start.classList.add('hide');
		}
		function artShow(){
			// when the close button is clicked hide the full text and restore intro articles
			intro.classList.remove('hide');
			start.classList.remove('hide');
		}
		// match img height to header
		window.onresize = resize;
		resize();

		// thunder animation on rollover
		hdr.addEventListener("mouseenter", function(event){
			over.classList.add("fade");
		});
		hdr.addEventListener("mouseout", function(event){
			over.classList.remove("fade");
		});

		// when a belt section is clicked hide the intro articles and reveal the matching text
		oneB.addEventListener('click', function(){
			artHide();
			oneF.classList.remove('off');
			oneF.classList.add('on');

			// var close = oneF.getElementsByTagName('close')[0];
			oneF.addEventListener('click',function(){
				oneF.classList.remove('on');
				oneF.classList.add('off');
				artShow();
			});
		});
	};
	init();
})();