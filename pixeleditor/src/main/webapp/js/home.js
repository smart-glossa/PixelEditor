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

		        var url = "http://localhost:8080/pixeleditor/File?operation=addFile&fName="+fname+"&messages="+messages;

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
$(document).on("click",".fulldetail",function(){
	var fName = $(this).children().text();
	var url ="http://localhost:8080/pixeleditor/File?operation=getMsg&fName="+fName;
	$.ajax({
        url: url,
        type: 'POST'
    })
    .done(function(result) {
        result = JSON.parse(result);
        $("#messages").val(result.message);
       
    })
    .fail(function(result) {
        console.log(result);
    });
	
	
	
	
	
	 $(document).on('click','#project',function(){
	       $('.details').show();
	    });
	    $(document).on('click','#save',function(){
	    	$('.details').hide();
	    	$('.div1').show();
	    });

});
