(function(){
	var init = function(){
		var over = document.getElementById('over');
		var hdr = document.getElementsByTagName('header')[0];

		hdr.addEventListener("mouseenter", function(event){
			over.classList.add("fade");
		});
		hdr.addEventListener("mouseout", function(event){
			over.classList.remove("fade");
		});
	};
	init();
})();