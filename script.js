const clockElement = document.querySelector('.clock');
console.log(clockElement); 

function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  console.log(`${hours}:${minutes}:${seconds}`);
  return `${hours}:${minutes}:${seconds}`;
}

function updateClock() {
  clockElement.textContent = getCurrentTime();
  console.log("Clock updated");
}

setInterval(updateClock, 1000);
