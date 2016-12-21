$(document).on(
	    "click",
	    "#save",
	    function() {
        var strVar="";
strVar += "<div id=\"sav\">";
strVar += "<table>";
strVar += "<tr><td >File Name<\/td><td ><input type=\"text\" id=\"fname\"><\/td><\/tr>";
strVar += "<tr><td><button id=\"addfile\">Save<\/button><td><\/tr>";
strVar += "<\/table>";
strVar += "<\/div>";
$("#insert")[0].innerHTML = strVar;
})
$(document).on(
    "click",
    "#addfile",
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


        var url = "/pixeleditor/pe?operation=addfile&fname=" +
            fname + " &messages=" + messages ;


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
$(document).on(
	    "click",
	    "#open",
	    function() {
        var strVar="";
strVar += "<div id=\"sav\">";
strVar += "<table>";
strVar += "<tr><td >File Name<\/td><td ><input type=\"text\" id=\"fname\"><\/td><\/tr>";
strVar += "<tr><td><button id=\"openfile\">Open<\/button><td><\/tr>";
strVar += "<\/table>";
strVar += "<\/div>";
$("#insert")[0].innerHTML = strVar;
})
function newwindow(){
var strVar="";
strVar += "<textarea id=\"messages\"><\/textarea>";
$("#editor")[0].innerHTML = strVar;

}
$(document).on(
	    "click",
	    "#openfile",
	    function() {
	        var fname = $('#fname').val();
	        if (fname == "") {
	            $("#fname").focus().css("outline-color", "red");
	            return;
	        }
	        if (fname !== "") {

	            var url = "/pixeleditor/pe?operation=getmessages&fname=" +
	                fname;
	            $.ajax({
	                url: url,
	                type: 'POST'
	            }).done(function(result) {
	                var res = JSON.parse(result);

	                $('#messages').val(res.Mess);
	                $("#messages")[0].innerHTML = res;

	            }).fail(function(result) {
	                alert(result);
	            })
	        } 
	    })
	    

