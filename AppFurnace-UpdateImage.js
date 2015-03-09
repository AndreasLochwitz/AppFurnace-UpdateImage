
// Change all images of that contain partOfCodeName in Code Name to newImageName
function updateImage(partOfCodeName, newImageName) {
	$("div[data-var*='" + partOfCodeName + "']")
		.each(function(index) { 
			var widgetName = $(this).attr("data-var").split(".")[1];
			ui[widgetName].backgroundImage(newImageName);
		}
	);
}
