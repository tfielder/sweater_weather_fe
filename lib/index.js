// This file is in the entry point in your webpack config.

  // button formatting
  $("button").each(function () {
    $(this).css("cursor", "pointer");
  });

  $(".submit").each(function () {
    $(this).css("cursor", "pointer");
  });

  //modal display
  $(".login-button").click(function () {
    $(".login-modal").show();
  });

  $(".signup-button").click(function () {
    $(".signup-modal").show();
  });

  $(".location-button").click(function () {
    $(".location-modal").show();
  });

  //information gathering based on location
  $(".location-search").click(function (){
    var locale = $("#location").val();
    getWeather(locale);
    getPhotos(locale);
    getLocationInfo(locale);
    $(".location-modal").hide();
  });

  const getRandomImage = () => {
    var photos_object = JSON.parse(localStorage.getItem('photos'));
    var photos = photos_object["photos"]["photo"]
    var photo = choosePhoto(photos);
    return photo;
  }

  const choosePhoto = (photos) => {
    var photo = randomizePhoto(photos);
    while (typeof photo === "undefined") {
      photo = randomizePhoto(photos);
    }
    return photo;
  }

  const randomizePhoto = (photos) => {
    return photos[Math.floor(Math.random() * photos.length)]["url_o"];
  }

  const setBackgroundImage = () => {
    $('body').css('background-image', `url(${getRandomImage()})`);
  }

  const setPhotoInfo = (info) => {
    localStorage.setItem('photos', JSON.stringify(info));
    setBackgroundImage();
  }

  const setLocationInformation = (info) => {
    localStorage.setItem('location', JSON.stringify(info));
    var locale = JSON.parse(localStorage.getItem('location'));
    setLocationBox(info);
  }

  const setWeatherInfo = (info, locale) => {
    localStorage.setItem('weather', JSON.stringify(info));
    var weather = JSON.parse(localStorage.getItem('weather'));
    setCurrentConditions(weather);
    setForecastConditions(weather);
    setHourlyForecast(weather);
    setWeeklyForecast(weather);
  }

  const getWeather = (locale) => {
    const url = "https://whether-to-weather.herokuapp.com/api/v1/forecast?location=" + locale;
    fetch(url)
    .then((response) => response.json())
    .then((info) => setWeatherInfo(info, locale))
    .catch((error) => console.error({ error }))
  }

  const getPhotos = (locale) => {
    const url = "https://whether-to-weather.herokuapp.com/api/v1/backgrounds?location=" + locale;
    fetch(url)
      .then((response) => response.json())
      .then((info) => setPhotoInfo(info))
      .catch((error) => console.error({ error }))
  }

  const getLocationInfo = (locale) => {
    const url = "https://whether-to-weather.herokuapp.com/api/v1/location?location=" + locale;
    fetch(url)
      .then((response) => response.json())
      .then((info) => setLocationInformation(info))
      .catch((error) => console.error({ error }))
  }

  const setCurrentConditions = (weather) => {
    $('.current-con').empty();
    $('.current-con').append(`<p>${weather["currently"]["icon"]}</p>`);
    $('.current-con').append(`<h3>${weather["currently"]["summary"]}</h3>`);
    $('.current-con').append(`<h1>${weather["currently"]["temperature"]} &deg;F</h1>`);
    $('.current-con').append(`<h3>High: ${weather["daily"]["data"][0]["temperatureHigh"]}</h3>`);
    $('.current-con').append(`<h3>Low: ${weather["daily"]["data"][0]["temperatureLow"]}</h3>`);
  }

  const setLocationBox = (locale) => {
    $('.city').empty();
    $('.city').append(`<h1>${locale['results']["0"]["address_components"][0]["long_name"]}, ${locale['results']["0"]["address_components"][2]["long_name"]}</h1>`)
    $('.city').append(`<h2>${locale['results']["0"]["address_components"][3]["long_name"]}</h2>`)
    $('.city').append(`<h3>${(new Date).getMonth() + 1}/${(new Date).getDate()}/${(new Date).getFullYear()}</h3>`)
  }

  const setForecastConditions = (weather) => {
    $('.icon-section').empty();
    $('.icon-section').append(`<p>${weather["currently"]["icon"]}</p>`)
    $('.icon-section').append(`<h3>${weather["currently"]["summary"]}</h3>`);
    $('.additional-info-responses').empty();
    $('.additional-info-responses').append(`<h3>${weather["currently"]["apparentTemperature"]} &deg;F</h3>`);
    $('.additional-info-responses').append(`<h3>${weather["currently"]["humidity"]}</h3>`);
    $('.additional-info-responses').append(`<h3>${weather["currently"]["visibility"]}</h3>`);
    $('.additional-info-responses').append(`<h3>${weather["currently"]["uvIndex"]}</h3>`);
    $('.conditions-description').empty();
    $('.conditions-description').append(`<h3><em>Today:</em>${weather["hourly"]["summary"]}</h3>`);
  }

  const setHourlyForecast = (weather) => {
    var hourlyData = weather["hourly"]["data"];
    $('.hourly-forecast').empty();
    for (var i = 0; i < 12; i++) {
      $('.hourly-forecast').append(`<div class="hour-div"><h3>${getTimeFormatted(hourlyData[i]["time"])}:00</h3><h3>${hourlyData[i]["temperature"]} &deg;F</h3><h3>${hourlyData[i]["summary"]}</h3></div>`);
    }
  }

  const setWeeklyForecast = (weather) => {
    var weeklyData = weather["daily"]["data"];
    $('.weekly-forecast').empty();
    for (var i = 1; i < 8; i++) {
      $('.hourly-forecast').append(`<div class="weekly-div"><h3>${getDayFormatted(i)}</h3><h3>High: ${weeklyData[i]["temperatureHigh"]} &deg;F</h3><h3>Low: ${weeklyData[i]["temperatureLow"]} &deg;F</h3><h3>${weeklyData[i]["summary"]}</h3></div>`);
    }
  }

  const getDayFormatted = (day) => {
    var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date(Date.now());
    var dayOfTheWeek = today.getDay();
    return dayArray[(dayOfTheWeek + day) % 7];
  }

  const getTimeFormatted = (time) => {
    var hours = (new Date(time * 1000)).getHours();
    if (hours > 12) {
      hours = hours - 12;
      return hours;
    } else if (hours == 0){
      return 12;
    } else {
      return hours;
    }
  }

  //login
  $('.login-submit').click(function () {
    var email = $("#email-login").val();
    var password = $("#password-login").val();
    $('.login-modal').hide();
  })

  //sign-up
  $('.sign-up-submit').click(function () {
    var email = $("#email-signup").val();
    var password = $("#password-signup").val();
    var passwordVerification = $("#password-verify-signup").val();
    $('.signup-modal').hide();
  })



