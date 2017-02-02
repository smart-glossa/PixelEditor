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
			    div += "<p><img src='images/1.png'" + result[i].img + "</p>";	
	    		div += "<p id='na'>" + result[i].fName + "</p>";
	    		//div += "<input>" + result[i].messages + "</input>";
				div += "</div>";
			}
			div += "</div>";
			$(".details")[0].innerHTML = div;
		});
	
});
	$(document).on(
		    "click",
		    "#save",
		    function() {

		        var fname = $("#fname").val();
		        var messages = $("#messages").val();


		        if (fname == "") {
		            $("#fname").focus().css("outline-color", "red");
		            return;
		        }
		        if (messages == "") {
		            $("#messages").focus().css("outline-color", "red");
		            return;
		        }


		        var url = "/pixeleditor/File?operation=addFile&fName="+fname+"&messages="+messages;


		        $.ajax({
		            url: url, 
		            type: 'POST'

		        }).done(function(result) {
		            alert(result);

		        })
		        .fail(function(result) {
		            alert(result);
		        });
		    });
	
});
$(document).on("click",".na",function(){
	var fName = $(this).val();
	var url = 
})