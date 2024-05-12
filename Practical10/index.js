var sentence = "The quick brown fox jumps over the lazy dog.";
var index = 0;
var correctCharacters = 0;
var typedCharacters = 0;
var startTime;
var timerInterval;

document.addEventListener("DOMContentLoaded", function () {
  displayQuote();
  startTimer();
});

document.addEventListener("keydown", function (event) {
  var userInput = event.key;
  console.log(userInput);
  if (
    userInput == "Tab" ||
    userInput == "Alt" ||
    userInput == "CapsLock" ||
    userInput == "Shift" ||
    userInput == "Control"
  )
    return;
  if (userInput.charCodeAt(0) >= 32 && userInput.charCodeAt(0) <= 127) {
    // Only consider alphabetical key presses
    if (userInput === sentence.charAt(index)) {
      console.log("CorrectInput");
      document.getElementById("char-" + index).style.backgroundColor = "green";
      document.getElementById("char-" + index).style.color = "white";
      correctCharacters++;
    } else {
      console.log("IncorrectInput");
      document.getElementById("char-" + index).style.backgroundColor = "red";
      document.getElementById("char-" + index).style.color = "white";
    }

    index++;
    typedCharacters++;
    updateAccuracy();
    updateSpeed();

    if (index === sentence.length) {
      clearInterval(timerInterval);
    }
  }
});

function displayQuote() {
  var quoteContainer = document.getElementById("quoteContainer");
  quoteContainer.innerHTML = ""; // Clear previous content

  for (var i = 0; i < sentence.length; i++) {
    var span = document.createElement("span");
    span.id = "char-" + i;
    span.textContent = sentence.charAt(i);
    span.style.color =
      i < index
        ? sentence.charAt(i) === sentence.charAt(i).toUpperCase()
          ? "green"
          : "red"
        : "gray";
    quoteContainer.appendChild(span);
  }
}

function updateAccuracy() {
  var accuracy = (correctCharacters / typedCharacters) * 100;
  document.getElementById("accuracy").textContent =
    "Accuracy: " + accuracy.toFixed(2) + "%";
}

function updateSpeed() {
  var elapsedTime = (Date.now() - startTime) / 60000; // in minutes
  var wpm = Math.round(typedCharacters / 5 / elapsedTime);
  document.getElementById("speed").textContent = "Speed: " + wpm + " WPM";
}

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateSpeed, 1000);
}

function isCharacter(key) {
    return /^[a-zA-Z]$/.test(key);
}