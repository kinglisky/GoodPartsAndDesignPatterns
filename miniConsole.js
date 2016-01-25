miniConsole = {
	log: function () {
		document.getElementById('out7').innerHTML+=Array.prototype.join.call(arguments)+"<br>";
	}
}
