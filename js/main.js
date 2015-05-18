(function(){
	var init = function(){
		var under = document.getElementById('under');
		var over = document.getElementById('over');
		var hdr = document.getElementsByTagName('header')[0];
		var oneB = document.getElementById('oneB');
		var oneF = document.getElementById('oneF');
		var twoB = document.getElementById('twoB');
		var twoF = document.getElementById('twoF');
		var threeB = document.getElementById('threeB');
		var threeF = document.getElementById('threeF');
		var intro = document.getElementById('intro');
		var start = document.getElementById('start');

		function resize(){
			// under.style.height = over.style.height = hdr.offsetHeight + 'px';
			under.style.width = over.style.width = hdr.offsetWidth + 'px';
			// if under height > hdr height then hdr height = under height else hdr height = auto
			if ( under.offsetHeight > hdr.offsetHeight ) {
				hdr.style.height  = under.offsetHeight + 'px';
			// } else {
				// hdr.style.height = 'auto';
			}
			// console.log("resize fired!");
		}
		// load content as JSON
		// var xhr = new XMLHttpRequest();
		// xhr.onload = function(){ console.log("xhr loaded!"); }
		// xhr.open("GET", "content.json");
		// xhr.send(null);

		function artHide(){
			// when a belt section is clicked hide the intro articles and reveal the matching text
			intro.classList.add('faded');
			start.classList.add('faded');
		}
		function artShow(){
			// when the close button is clicked hide the full text and restore intro articles
			intro.classList.remove('faded');
			start.classList.remove('faded');
		}
		// match img height to header
		window.setTimeout(resize, 500);
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
			twoF.classList.remove('on');
			twoF.classList.add('off');
			threeF.classList.remove('on');
			threeF.classList.add('off');

			oneF.addEventListener('click',function(){
				oneF.classList.remove('on');
				oneF.classList.add('off');
				artShow();
			});
		});
		twoB.addEventListener('click', function(){
			artHide();
			twoF.classList.remove('off');
			twoF.classList.add('on');
			oneF.classList.remove('on');
			oneF.classList.add('off');
			threeF.classList.remove('on');
			threeF.classList.add('off');

			twoF.addEventListener('click',function(){
				twoF.classList.remove('on');
				twoF.classList.add('off');
				artShow();
			});
		});
		threeB.addEventListener('click', function(){
			artHide();
			threeF.classList.remove('off');
			threeF.classList.add('on');
			twoF.classList.remove('on');
			twoF.classList.add('off');
			oneF.classList.remove('on');
			oneF.classList.add('off');

			threeF.addEventListener('click',function(){
				threeF.classList.remove('on');
				threeF.classList.add('off');
				artShow();
			});
		});
	};
	init();
})();