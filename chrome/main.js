//chrome.tabs.executeScript(null, {file: "jquery.js"});
//chrome.tabs.executeScript(null, {file: "jquery.quicksearch.js"});
// $(document).ready(function() {
	// $("#TabData").on("ready", go);
// });
$(function() {
	//var tabdata = $("#TabData");
	var idIncrementer = 0, 
		searchTextBoxIDPrefix = "gqs_",
		gridSelector = ".dataGrid, .dataTables_wrapper",
		delay = 2000;
	
	var masterBody = $("#master-body");
	function setupDataGrid() {
		var t = $(this);
	}
	
	function makeSearchTextBoxID(incr) {
		return searchTextBoxIDPrefix + incr;
	}
	
	function createSearchContainer() {
		var div = document.createElement("div");
		div.appendChild(document.createTextNode("Search: "));
		var textbox = document.createElement("input");
		textbox.type = "text";
		idIncrementer = idIncrementer + 1;
		textbox.id = makeSearchTextBoxID(idIncrementer);
		div.appendChild(textbox);
		return div;
	}
	//$("#ctl00_Main_TabsTable").on("DOMNodeInserted", go);
	//tabdata.get(0).addEventListener ('DOMNodeInserted', go, false);
	
	function applyGrid() {
		var container = createSearchContainer()
		$(this).before(container);
		$(container).find("input").quicksearch($(this).find("tbody tr"));
	}
	
	function applyToAllGrids() {
		masterBody.find(gridSelector).each(function() {
			applyGrid.call(this);
		});
	}
	
	setTimeout(function() {
		applyToAllGrids();
	}, delay);
	
	// Special cases for dashboard, doesn't work right yet
	$(".tabItem").click(function() {
		setTimeout(applyToAllGrids, delay);
	});
});