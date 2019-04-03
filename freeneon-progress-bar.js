"use strict";

let freeneonProgressBar = (function() {

	function freeneonProgressBar(selector) {

		console.log(selector);

		window.addEventListener("scroll", function() {

			var wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

			var scrolled = window.pageYOffset || document.documentElement.scrollTop;

			let ratio = scrolled / ((document.body.clientHeight - wh) / 100);

			document.querySelector(selector).style.width = ratio + "%";


		});
	}

	return freeneonProgressBar;

})();