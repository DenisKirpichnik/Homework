let button = document.getElementById("getWeather__btn");
let date1 = document.getElementById("date1");
let tbody = document.getElementById("tbody");
let latitude = document.getElementById("loc_lat")
let longitude = document.getElementById("loc_long")

/* Autocomplete start */
var searchInput = "search_input";

$(document).ready(function () {
  var autocomplete;
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById(searchInput), {
      types: ["geocode"],
    }
  );

  google.maps.event.addListener(autocomplete, "place_changed", function () {
    var near_place = autocomplete.getPlace();
    document.getElementById(
      "loc_lat"
    ).value = near_place.geometry.location.lat();
    document.getElementById(
      "loc_long"
    ).value = near_place.geometry.location.lng();
  });
});
//Remove latitude & longitude on changing the input field value using jQuery.
$(document).on("change", "#" + searchInput, function () {
  document.getElementById("latitude_input").value = "";
  document.getElementById("longitude_input").value = "";
});
/* Autocomplete  end */
function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${
        latitude.value
    }&lon=${
      longitude.value
    }&key=5efa8de470284fe78c54f6c6999c1593 `
    )
    .then((response) => response.json())
    .then(function (data) {
      var data = data.data.slice(0, 7);
      console.log(data);

      return data.map(function (date_row) {
        let trow = createNode("tr");
        let date = createNode("td");
        let temp = createNode("td");
        let descr = createNode("td");
        date.innerText = date_row.datetime;
        temp.innerText = date_row.max_temp;
        descr.innerText = date_row.weather.description;
        append(tbody, trow);
        append(trow, date);
        append(trow, temp);
        append(trow, descr);
      });
    })
    .catch((error) =>
      console.log("oops,something went wrong, here's the error", error)
    );
});