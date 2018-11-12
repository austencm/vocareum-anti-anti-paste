chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			document
				.querySelector('#codearea0')
				.parentElement
				.addEventListener('paste', function (event) {
					event.stopPropagation();
				}, true);
		}
	}, 10);
});
