var date = new Date;
var hour = date.getHours();

function addingZero(x) {
	if (x<10) {
		return '0' + x;
	}
	else {
		return x;
	}
}

function formatTime() {
	if (hour<12) {
		return "AM";
	}
	else {
		return "PM";
	}
}

setInterval(function(){
	var date = new Date;
	var time = addingZero(date.getHours())+":"+addingZero(date.getMinutes())+":"+addingZero(date.getSeconds())+formatTime();
	document.getElementById('time').innerHTML = time;
}, 1000)