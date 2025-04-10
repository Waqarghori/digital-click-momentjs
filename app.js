let alarmTime = null;
let alarmTriggered = false;

function updateClock() {
  const now = moment().format("HH:mm:ss");
  document.getElementById("clock").innerText = now;

  if (alarmTime === moment().format("HH:mm") && !alarmTriggered) {
    document.getElementById("alarmSound").play();
    alert("⏰ Wake up Jaani! Alarm baj gaya!");
    alarmTriggered = true; // Stop repeating
  }
}

function setAlarm() {
  const timeInput = document.getElementById("alarmTime").value;
  if (timeInput) {
    alarmTime = timeInput;
    alarmTriggered = false;
    alert("🔔 Alarm set for " + alarmTime);
  }
}

function clearAlarm() {
  alarmTime = null;
  alarmTriggered = false;
  alert("🛑 Alarm cleared");
}

updateClock(); // Initial call
setInterval(updateClock, 1000); // Update every second