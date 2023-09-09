document.addEventListener("DOMContentLoaded", function () {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];
  const currentUTCTime = currentDate.getTime();

  const currentDayOfTheWeekElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const currentUTCTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );

  currentDayOfTheWeekElement.textContent = `Current Day: ${currentDay}`;
  currentUTCTimeElement.textContent = `Current UTC Time: ${currentUTCTime} milliseconds`;
});
