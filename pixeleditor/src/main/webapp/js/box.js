function my(){
	
	var file="";
	file += "";
	file += "<div class=\"ss\"><textarea type=\"text\" id=\"messages\"><\/textarea><br>";
	file += "<input type=\"text\" id=\"fName\"><button id=\"save\">save<\/button><\/div>";

	
	$(".div1")[0].innerHTML = file;
}

function sent(){
	var good="";
	good += "";
	good += "<textarea type=\"text\" id=\"messages\"><\/textarea>";
	good += "<button id=\"send\">send<\/button>";
	good += "";
	
	$(".details")[0].innerHTML = good;
}