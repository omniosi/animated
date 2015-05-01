(function(){
	var init = function(){
		var under = document.getElementById('under');
		var over = document.getElementById('over');
		var hdr = document.getElementsByTagName('header')[0];

		function resize(){
			// under.style.height = over.style.height = hdr.offsetHeight + 'px';
			under.style.width = over.style.width = hdr.offsetWidth + 'px';
		}
		// match img height to header
		// window.onresize = resize();
		window.onresize = resize;
		resize();

		// thunder animation on rollover
		hdr.addEventListener("mouseenter", function(event){
			over.classList.add("fade");
		});
		hdr.addEventListener("mouseout", function(event){
			over.classList.remove("fade");
		});
	};
	init();
})();