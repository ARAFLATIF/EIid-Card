const friends = ["SIAM", "ORPITA", "RIDIKA", "SHADMAN", "ARDRA", "AURPA", "SABBIR", "ISHRAT"];
let index = 0;
const nameEl = document.getElementById("friend-name");

// === Friend Name Carousel ===
setInterval(() => {
  nameEl.textContent = friends[index];
  index = (index + 1) % friends.length;
}, 2500);

// === Eid Blessing Generator ===
const blessings = [
  "May your Eid be filled with love and light.",
  "May Allah accept your good deeds and sacrifices.",
  "Wishing you peace, joy, and prosperity.",
  "May your prayers be answered this Eid.",
  "May this holy day bring you closer to your family and faith."
];

function showBlessing() {
  const random = blessings[Math.floor(Math.random() * blessings.length)];
  document.getElementById("blessing-msg").textContent = random;
}

// === Personal Message Toggle ===
function toggleMessage() {
  const msg = document.getElementById("araf-message");
  msg.classList.toggle("hidden");
}

// === Nasheed Music Control ===
function toggleMusic() {
  const audio = document.getElementById("nasheed");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// === Confetti Celebration ===
function launchConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// === Countdown to Eid End in Bangladesh Standard Time (UTC+6) ===
const countdownEl = document.getElementById("countdown");

// Create a Date object in UTC+6 (Bangladesh) for today at 11:59:59 PM
function getBangladeshEidEndTime() {
  const now = new Date();

  // Get UTC equivalent of today in Bangladesh time
  const year = now.getUTCFullYear();
  const month = now.getUTCMonth();
  const date = now.getUTCDate();

  // 11:59:59 PM in Bangladesh = 17:59:59 UTC
  return new Date(Date.UTC(year, month, date, 17, 59, 59));
}

setInterval(() => {
  const now = new Date();
  const eidEnd = getBangladeshEidEndTime();
  const diff = eidEnd - now;

  if (diff < 0) {
    countdownEl.textContent = "Eid has ended in Bangladesh. Hope it was amazing!";
    return;
  }

  const hrs = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  countdownEl.textContent = `Eid (Bangladesh) ends in: ${hrs}h ${mins}m ${secs}s`;
}, 1000);
;

  