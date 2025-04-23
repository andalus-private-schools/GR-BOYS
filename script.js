// ======== دالة الشراشيب المستمرة ========
function launchConfetti() {
  setInterval(function () {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });
  }, 250);
}

// ======== إعداد التاريخ المستهدف ========
const countdownDate = new Date("May 27, 2025 00:00:00").getTime();

// ======== تشغيل العد التنازلي كل ثانية ========
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // ===== عند انتهاء العد التنازلي =====
  if (distance < 0) {
    clearInterval(x);

    // إخفاء العناصر القديمة
    const countdown = document.querySelector(".countdown");
    if (countdown) countdown.style.display = "none";

    const mainTitle = document.getElementById("main-title");
    if (mainTitle) mainTitle.style.display = "none";

    const schoolName = document.getElementById("school-name");
    if (schoolName) schoolName.style.display = "none";

    // إنشاء عبارة التهنئة
    const congrats = document.createElement("h1");
    congrats.innerText = "CONGRATULATIONS TO THE CLASS OF 2025";
    congrats.style.textTransform = "uppercase";
    congrats.style.fontSize = "3em";
    congrats.style.letterSpacing = "2px";
    congrats.style.maxWidth = "90%";
    congrats.style.wordWrap = "break-word";
    congrats.style.padding = "0 10px";
    congrats.style.color = "white";
    congrats.style.textAlign = "center";
    congrats.style.position = "relative";
    document.body.appendChild(congrats);

    // تشغيل الشراشيب
    launchConfetti();
  }
}, 1000);