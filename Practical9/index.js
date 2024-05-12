function setCountdown() {
  var targetDate = new Date(
    document.getElementById("datetime").value
  ).getTime();
  var countdownElement = document.getElementById("countdown");

  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = targetDate - now;

    if (distance < 0) {
      clearInterval(x);
      countdownElement.innerHTML = "EXPIRED";
      return;
    }

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    countdownElement.innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }, 1000);
}
