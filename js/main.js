(function(){
	var init = function(){
		var over = document.getElementById('over');
		var hdr = document.getElementsByTagName('header')[0];

		// over.style.height = hdr.offsetHeight + 'px';

		// hdr.on hover = over.style.display:block;
		hdr.addEventListener("mouseenter", function(event){
			over.style.opacity = 1;

			// fade out after a short delay
			setTimeout(function(){
				over.style.opacity = 0;
			},500);
		});

	};
	init();
})();