$(document).ready(function(){
	$(document).on("click", "#sub", function(){	
	var url = "/pixeleditor/File?operation=getall"
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
	$(document).on("click","#save",function() {

		        var fname = $("#fName").val();
		        var messages = $("#messages").val();


		        if (fname == "") {
		            $("#fName").focus().css("outline-color", "red");
		            return;
		        }
		        if (messages == "") {
		            $("#messages").focus().css("outline-color", "red");
		            return;
		        }

		        var url ="/pixeleditor/File?operation=addFile&fName="+fname+"&messages="+messages;

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
	var url ="/pixeleditor/File?operation=getMsg&fName="+fName;
	$.ajax({
        url: url,
        type: 'POST'
    })
    .done(function(result) {
    	sent();
        result = JSON.parse(result);
        $("#fName").val(result.fname);
        $("#messages").val(result.message);
               
    })
    .fail(function(result) {
        console.log(result);
    });
	
	
	$(document).on("click","#update",function() {

        var Fname = $("#fName").val();
        var Messages = $("#messages").val();


        if (Fname == "") {
            $("#fName").focus().css("outline-color", "red");
            return false;
        }
        if (Messages == "") {
            $("#messages").focus().css("outline-color", "red");
            return;
        }

 var url="/pixeleditor/File?operation=updateMsg&fName="+Fname+"&messages="+Messages;
        $.ajax({
            url: url, 
            type: 'POST'

        }).done(function(result) {
            alert(result);

        })
        .fail(function(result) {
            alert(result);
        });
    })
	
      $(document).on('keyup', '#fName', function() {
            var fName = $('#fName').val();
            if (fName != "") {
                var url ="/pixeleditor/File?operation=getOne&fName="+fName;
                $.ajax({
                        url: url,
                        type: 'POST'
                    })
                    .done(function(result) {
                        result = JSON.parse(result);
                        $("#messages").val(result.messages);
                                               
                    });
            }
            
            
            
            
            
        });

    

    
   /* $(document).on('click','',function(){
      $('.details').show();
   });
   $(document).on('click','#save',function(){
   	$('.div1').hide();
   });*/

});


