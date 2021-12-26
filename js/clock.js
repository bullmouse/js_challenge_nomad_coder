const myClock = document.querySelector(".clock");
const getClockData = function () {
  const currentDate = new Date();
  const currentHours = String(currentDate.getHours()).padStart(2, "0");
  const currentMinutes = String(currentDate.getMinutes()).padStart(2, "0");
  const currentSeconds = String(currentDate.getSeconds()).padStart(2, "0");

  myClock.innerText = `${currentHours}:${currentMinutes}:${currentSeconds}`;
};

getClockData();
setInterval(getClockData, 1000);
