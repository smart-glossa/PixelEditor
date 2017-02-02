$(document).ready(function(){
	$(document).on("click", "#sub", function(){	
	var url = "http://localhost:8080/pixeleditor/File?operation=getall"
		$.ajax({
			url : url,
			type : 'POST'
		}).done(function(result) {
			var result = JSON.parse(result);
			var div = "<div >"
			for (var i = 0; i < result.length; i++) {
				div += "<div class='fulldetail'>"
	    		div += "<p id='na'>" + result[i].fName + "</p>"
	    		div += "<p>" + result[i].messages + "</p>"
				div += "</div>";
			}
			div += "</div>";
			$(".details")[0].innerHTML = div;
		});
	
})
});
