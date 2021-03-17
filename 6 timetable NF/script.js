let start = document.getElementById("time_start");
let end = document.getElementById("time_end");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

/*
var now = moment();
console.log(now);
var localOffset = now.utcOffset();
now.tz("Asia/Vladivostok"); // your time zone, not necessarily the server's
var centralOffset = now.utcOffset();
let diffInMinutes = localOffset - centralOffset;
let diffInHours = diffInMinutes / 60;
console.log(diffInHours); // 7 hours
//Europe/London
//Asia/Vladivostok
*/

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(typeof start.value, typeof end.value);
  if (start.value == "" || end.value == "") {
    output.innerText = "please choose valid time";
    return;
  } else {
    let startTime = +start.value.match(/^\d\d/)[0]; //string => number
    let endTime = +end.value.match(/^\d\d/)[0];
    if (badArr.includes(startTime)) {
      output.innerText = "this time is not available, please pick again";
    }
    /*
        else if (badArr.includes(startTime) || badArr.includes(endTime)) {
            output.innerText = "this time is not available ";
        }
        */
  }
});

let availableArr = [0, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21, 22, 23];
let notAvailableArr = [2, 3, 11, 13, 14, 15, 16, 17, 18, 19, 20];

// success, available time
// failure, not available
// the time diff is 7 hours
