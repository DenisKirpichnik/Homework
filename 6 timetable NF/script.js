let start = document.getElementById("time_start");
let end = document.getElementById("time_end");
let btn = document.getElementById("btn");
let output = document.getElementById("output");


// getting the full date today in the most optimal way)
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDate()
const fulldate = `${year}-${month+1}-${day}`

// gets the timeStamps for today for all hours
function getTimeStampForToday(time) {
  return new Date(`${fulldate} ${time}:00:00`).getTime()
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  // checks if the user has set the time
  if (start.value == "" || end.value == "") {
    output.innerText = "please choose valid time";
    return;
  }
  // converts time strings from time inputs to numbers and get timestamps for the values
  let startTime = getTimeStampForToday(+start.value.match(/^\d\d/)[0]) //string => number
  let endTime = getTimeStampForToday(+end.value.match(/^\d\d/)[0]) // getTimeStampForToday(1)

  if (
    avArrTimeStamps.includes(startTime) && avArrTimeStamps.includes(endTime)) {
    output.innerText = "successfully booked the car ";
  } else {
    output.innerText = "this time is not available  ";
  }
});



let avArr = [0, 3, 4, 5, 6, 7, 8, 9, 10, 12, 21, 22, 23];
let notAvArr = [1, 2, 11, 13, 14, 15, 16, 17, 18, 19, 20];

let avArrTimeStamps = avArr.map((hour) => getTimeStampForToday(hour))
//let notAvArrTimeStamps = notAvArr.map((hour) => getTimeStampForToday(hour))


/*
const today0 = new Date('18-03-2021 00:00').getTime() // 2345653546
const from = 2345653546 // 2345653546
const today1 = new Date('18-03-2021 01:00').getTime() // 2345653777

from <=
*/