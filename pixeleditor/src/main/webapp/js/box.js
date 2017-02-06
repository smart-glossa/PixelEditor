function my(){
	
	var file="";
	file += "";
	file += "<div class=\"ss\"><textarea type=\"text\" id=\"messages\" class=\"textarea\"><\/textarea><br>";
	file += "<input type=\"text\" id=\"fName\"><button id=\"save\">save<\/button><\/div>";

	
	$(".details")[0].innerHTML = file;
}

function sent(){
	var good="";
	good += "";
	good+= "<div class=\"sds\"><textarea type=\"text\" id=\"messages\" class=\"textarea1\"><\/textarea><br>";
	good += "<input type=\"text\" id=\"fName\" readOnly=\"true\"><button id=\"update\">send<\/button><\/div>";
	good += "";
	$(".deed")[0].innerHTML = good;
}