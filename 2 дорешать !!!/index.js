let number = document.getElementById("numberInput").value;
document.querySelector(".output").innerText = showDayOfTheWeek(number);

console.log(number);

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
