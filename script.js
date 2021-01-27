var currentDay = document.querySelector('.date');
currentDay.textContent = dayjs().format('MM/D/YYYY');

var todayDate = document.querySelector('.dateNow');
todayDate.textContent = dayjs().format('MM/D/YYYY');

var todayDate = document.querySelector('.dateNow');
// d = date.getDate(),
// m = date.getMonth(),
// y = date.getFullYear();


// for(i=0; i < 5; i++){
// var curdate = new Date(y, m, d+i)
// console.log(curdate)
// }





// $('.btn').click(function(){

//     var city = $('.inputValue').val();
//     var key = '88da1611665dfe9338cd6679dee95466';

//     $.ajax({
//         url: 'http://api.openweathermap.org/data/2.5/weather',
//         dataType: 'json',
//         type: 'GET',
//         data: {q:city, appid: key, units: 'metric'},

//         success: function(data) {
//             var temp = '';
//             $.each(data.weather, function(index, val) {
//                wf += '<p><b>' + data.name + "</b><img src="+ val.icon + ".png></p>"+
//                data.main.temp + '&deg;F ' + ' | ' + val.main + ", " + 
//                val.humidity + val.wind + val.uv
//             },
//             $("showWeather").html(temp));

//         }
//     });
    
// });

$('.d-flex').on('submit', function(e) {
    e.preventDefault();
    var city = $('.inputValue').val();
    var key = '88da1611665dfe9338cd6679dee95466';
  
    $.ajax({
      url: 'https://api.openweathermap.org/data/2.5/weather',
      dataType: 'json',
      type: 'GET',
      data: {
        q: city,
        appid: key,
        units: 'metric'
      },
      success: function(data) {
        let html = data.weather.map(loc => `<p><b>${data.name}</b><img src="${loc.icon}.png" /></p>${data.main.temp}&deg;F | ${loc.main}, ${data.main.humidity}%, ${data.wind.speed} @ ${data.wind.deg}&deg;`);
        $("#showWeather").html(html);
      }
    });
  });


// // $('.btn').click(function(){
//     $.ajax({
//         type: "GET",
//         url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city +  '&appid=' + keys,
//         // makeUrl(url, keys), // Gets the constructed url
//         dataType: "json",
//         // contentType: 'application/json',
//         success: function(data) {
//             // if(city === -1) set the index to negative -1
//                 //What to do on success 
//         }
//     });
// // });



// // card , title , image, and these will be variables and use jquery to save them for each day for 5 days
// // use a for loop 5 TimeRanges, create variables for temp and humidity and date



