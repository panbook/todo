function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString();//.padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = currentTime;
  }
  
  // Wywołaj funkcję zegara co sekundę
  setInterval(updateClock, 1000);