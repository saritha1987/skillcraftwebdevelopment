let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;
let lapCount = 0;

const display = document.getElementById("display");
const startPauseBtn = document.getElementById("startPause");
const lapBtn = document.getElementById("lap");
const resetBtn = document.getElementById("reset");
const laps = document.getElementById("laps");

function formatTime(time) {
  const ms = time % 1000;
  const totalSeconds = Math.floor(time / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600);

  return (
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0") + "." +
    String(ms).padStart(3, "0")
  );
}

function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

function startPause() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
    startPauseBtn.textContent = "Pause";
    running = true;
  } else {
    clearInterval(timerInterval);
    startPauseBtn.textContent = "Start";
    running = false;
  }
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  lapCount = 0;
  running = false;
  display.textContent = "00:00:00.000";
  startPauseBtn.textContent = "Start";
  laps.innerHTML = "";
}

function addLap() {
  if (!running) return;

  lapCount++;
  const li = document.createElement("li");
  li.textContent = `Lap ${lapCount}: ${formatTime(elapsedTime)}`;
  laps.appendChild(li);
}

startPauseBtn.addEventListener("click", startPause);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", addLap);

/* Keyboard Shortcuts */
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") startPause();
  if (e.key.toLowerCase() === "r") reset();
  if (e.key.toLowerCase() === "l") addLap();
});
