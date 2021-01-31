const currentDay = dayjs().format('MM/DD/YYYY');
 $("#currentDay").text(currentDay);

let lat = document.querySelector('.lat');
let lon = document.querySelector('.lon');

// Function to display current forecast

$('.d-flex').on('submit', function(e) {
    e.preventDefault();
    var city = $('.inputValue').val();
    var key = '88da1611665dfe9338cd6679dee95466';
    
  
    $.ajax({
      url: 'https://api.openweathermap.org/data/2.5/weather?',
      dataType: 'json',
      type: 'GET',
      data: {
        q: city,
        appid: key,
        units: 'imperial'
      },
      success: function(data) {

        let html = data.weather.map(loc => `${data.name}<img src="${loc.icon}.png"/>
         </p>Temperature:${data.main.temp}°F | ${loc.main}, 
         </p>Humidity:${data.main.humidity}%, 
         </p>Wind Speed:${data.wind.speed}MPH,
         </p>UV Index:${data.main.uvi}`);       
         $("#showWeather").html(html);
      }
   
    });
  });


// Save user inputs to local storage
  var searchHistory = (localStorage.searchHistory) ? JSON.parse(localStorage.searchHistory) : [];
document.querySelector(".btn").addEventListener("click", () => {
  searchHistory.push(document.querySelector(".inputValue").value);
  localStorage.searchHistory = JSON.stringify(searchHistory);
});
document.querySelector(".inputValue").addEventListener("focus", () => {
  var data = document.querySelector("datalist#searchdata");
  data.innerHTML = "";
  searchHistory.forEach((search) => {
    data.innerHTML = "<option>" + data.innerHTML;
    data.querySelector("option").innerText = search;
  });
});

// For the 5 dates to be displayed
const dateNow = document.querySelector('.fiveDayForecast .dateNow');
dateNow.innerText = dayjs().add(1,'day').format('MM/DD/YYYY')
const dateNow1 = document.querySelector('.fiveDayForecast .dateNow1');
dateNow1.innerText = dayjs().add(2,'day').format('MM/DD/YYYY')
const dateNow2 = document.querySelector('.fiveDayForecast .dateNow2');
dateNow2.innerText = dayjs().add(3,'day').format('MM/DD/YYYY')
const dateNow3 = document.querySelector('.fiveDayForecast .dateNow3');
dateNow3.innerText = dayjs().add(4,'day').format('MM/DD/YYYY')
const dateNow4 = document.querySelector('.fiveDayForecast .dateNow4');
dateNow4.innerText = dayjs().add(5,'day').format('MM/DD/YYYY')

// $('.tempDay').on('submit', function(e) {
//     e.preventDefault();
//     // var city = $('.inputValue1').val();
//     var keys = 'd00b3725186bba9d9c7acbf2d2ce36e2';  
  
  
//     $.ajax({
//       url: 'https://api.openweathermap.org/data/2.5/onecall?',
//       dataType: 'json',
//       type: 'GET',
//       data: {        
//         lat: lat,
//         lon: lon,
//         appid: keys,
//         // units: 'imperial'
//       },
//       success: function(response) {
          
//         let html = response.weather.map(loc => `${response.name}<img src="${loc.icon}.png" />
//         </p>Temperature:${response.main.temp}°F | ${loc.main}, 
//         </p>Humidity:${response.main.humidity}`)%
//        $("#showWeather1").html(html);
//      }
//    });
//  });

      








