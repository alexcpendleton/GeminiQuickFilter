//chrome.tabs.executeScript(null, {file: "jquery.js"});
//chrome.tabs.executeScript(null, {file: "jquery.quicksearch.js"});
// $(document).ready(function() {
	// $("#TabData").on("ready", go);
// });

function go() {
	var x = document.getElementById("TabData");
	if(x) {
		x.background = "red";
	}
}