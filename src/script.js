
var dataList = document.querySelector('ul');
var fetchButton = document.getElementById('search-btn');
var userInput = document.getElementById('city-name');

var citySelect = "";
var cityHistory = [];
var apiKey = 
// TODO: hot to store api key securely

fetchButton.addEventListener('click', function(event){
  event.preventDefault();
 
  
  // city object from user-form
  var chosenCity = {
    city: userInput.value.trim(),


  };

  citySelect = chosenCity.city
  console.log(chosenCity)

  getCurrentWeather();
});

function init(){
  console.log("is this working?")
}

init()

function getCurrentWeather() {
  console.log("getApi called")

  var currentWeather = document.getElementById("current-weather")
  var requestUrl = 
  `https://api.openweathermap.org/data/2.5/weather?q=${citySelect}&appid=${apiKey}&units=imperial`

  fetch(requestUrl)
    .then(function (response) {
      return response.json();

    })
    .then(function (data) {
      console.log(data)
      // for (var i = 0; i < data.length; i++) {
      //   var listItem = document.createElement('li');
      //   listItem.textContent = data[i]
      //   dataList.appendChild(listItem);
      //   console.log(listItem)
      // }
      var nameCity =  data.name 
      // var dateCity = "date:" + date.dt
      var temperatureCity = "Temp: " + data.main.temp
      var humidityCity = "Humidity: " + data.main.humidity
      var windCity = "Wind: " + data.wind.speed
      console.log(nameCity, temperatureCity)


    // create a list element for every city weather attribute and display 
    var cityWeather = document.createElement('li');
    // city name
    cityWeather.textContent = nameCity;
    dataList.appendChild(cityWeather)
    // city temperature
    var cityWeather = document.createElement('li');
    cityWeather.textContent = temperatureCity;
    dataList.appendChild(cityWeather)
    // city wind
    var cityWeather = document.createElement('li');
    cityWeather.textContent = windCity;
    dataList.appendChild(cityWeather)
    // city humidity
    var cityWeather = document.createElement('li');
    cityWeather.textContent = humidityCity;
    dataList.appendChild(cityWeather)

    });
}
 

    // cityWeather = [nameCity, dateCity, temperatureCity, humidityCity,
    //   windCity];

// function getForecast(){
//   console.log("getApi called")
//   var currentWeather = document.getElementById("current-weather")
//   var requestUrl = 
//   "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();

//     })
//     .then(function (data) {
//       console.log(data)
//       // for (var i = 0; i < data.length; i++) {
//       //   var listItem = document.createElement('li');
//       //   listItem.textContent = data[i]
//       //   dataList.appendChild(listItem);
//       //   console.log(listItem)
//       // }
//       var cityName = "city: " + data.name 
//       var cityTemp = "temp: " + data.main.temp
//        console.log(cityName, cityTemp)
//     });
// }


