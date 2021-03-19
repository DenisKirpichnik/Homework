let number = document.getElementById("input");
let button = document.getElementById("getDay__btn");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (number.value > 0 && number.value < 8) {
    document.getElementById("output").innerText = showDayOfTheWeek(
      Number(number.value)
    );
  } else if (number.value > 7) {
    document.getElementById("output").innerText = "В неделе 7 дней silly";
  }
});

function showDayOfTheWeek(num) {
  switch (num) {
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    case 7:
      return "Sunday";
      break;
    default:
      return "";
  }
}
