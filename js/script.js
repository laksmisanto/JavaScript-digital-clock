function clock() {
  var hours = document.getElementById("hour");
  var minutes = document.getElementById("minute");
  var seconds = document.getElementById("second");
  var apm = document.getElementById("am__pm"); //this is optional part

  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();

  // Start Optional part we are ignore this section
  h == 0 ? (h = 24) : h;
  // h == 0 ? (ampm = "AM") : ampm;
  var hour = 12 < h ? h - 12 : h; //distract 24 h clock system
  var ampm = hour > 11 ? "AM" : "PM";
  var sec = 10 > s ? "0" + s : s;
  var min = 10 > m ? "0" + m : m;
  var ho = 10 > hour ? "0" + hour : hour;
  // End Optional part we are ignore this section

  hours.innerHTML = ho;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
  apm.innerHTML = ampm; //this is optional part
}

var interval = setInterval(clock, 1000);
