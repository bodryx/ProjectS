function getYear() {
  	var d = new Date();
   	var n = d.getFullYear();
   	return n;
}

document.getElementById("year").innerHTML = getYear();

function dayOrNight() {
    var timeFlag = "night";
    var d = new Date();
    var hours = d.getHours();
    if ((hours > 7) && (hours < 18)){
	  	timeFlag = "day";
    }
    return timeFlag;
}

var x = document.getElementsByClassName("hero_area");
x[0].style = "background-image: url(img/" + dayOrNight() + ".jpg";	

