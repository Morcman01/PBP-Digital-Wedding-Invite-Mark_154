const weddingDate = new Date("2026-10-23T09:00:00+07:00").getTime();

function updateCountdown(){
    const timeLeft = weddingDate - Date.now();
    
    if (timeLeft <= 0) {
      document.getElementById("countdown").innerHTML = "<h2>We're married!</h2>";
      clearInterval(timer); 
      return;
    }

    document.getElementById("days").textContent = Math.floor(timeLeft / (1000*60*60*24));
    document.getElementById("hours").textContent = Math.floor((timeLeft / (1000*60*60)) % 24);
    document.getElementById("minutes").textContent = Math.floor((timeLeft / (1000*60)) % 60);
    document.getElementById("seconds").textContent = Math.floor((timeLeft / 1000) % 60);
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);