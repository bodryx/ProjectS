
        function getYear() {
        	var d = new Date();
        	var n = d.getFullYear();
        	return n;
        }
        document.getElementById("year").innerHTML = getYear();