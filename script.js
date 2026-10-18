const weddingDate = new Date("2026-10-23T09:00:00+07:00").getTime();
const timer = setInterval(updateCountdown, 1000);
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.slide').forEach((el) => observer.observe(el));

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


window.addEventListener("scroll", () => {
  document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
});