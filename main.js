// Data alvo: 27 de dezembro de 2026 às 00:00:00
const targetDate = new Date("2026-12-27T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const containerEl = document.getElementById("countdown-container");
  const expiredEl = document.getElementById("expired-message");

  if (distance < 0) {
    // Se a data já passou
    containerEl.classList.add("hidden");
    expiredEl.classList.remove("hidden");
    return;
  }

  // Cálculos de tempo
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Atualiza os elementos formatando com zero à esquerda se menor que 10
  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

// Executa imediatamente na carga da página
updateCountdown();

// Atualiza a cada 1 segundo
setInterval(updateCountdown, 1000);
