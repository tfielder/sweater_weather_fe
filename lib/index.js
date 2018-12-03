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

  const setWeatherInfo = (info, locale) => {
    localStorage.setItem('weather', JSON.stringify(info));
    var weather = JSON.parse(localStorage.getItem('weather'));
    setCurrentConditions(weather);
    setLocationInformation(locale);
    setForecastConditions();
    setExtendedForecastConditions();
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

  const setCurrentConditions = (weather) => {
    $('.current-con').empty();
    $('.current-con').append(`<p>${weather["currently"]["icon"]}</p>`);
    $('.current-con').append(`<h3>${weather["currently"]["summary"]}</h3>`);
    $('.current-con').append(`<h1>${weather["currently"]["temperature"]} &deg;F</h1>`);
    $('.current-con').append(`<h3>High: ${weather["daily"]["data"][0]["temperatureHigh"]}</h3>`);
    $('.current-con').append(`<h3>Low: ${weather["daily"]["data"][0]["temperatureLow"]}</h3>`);
  }

  const setLocationInformation = (locale) => {
    $('.city').empty();
    $('.city').append(``);
    $('.city').append(`<h1>${"hi"}City</h1>`)
    $('.city').append(`<h2>${"hi"}Country</h2>`)
    $('.city').append(`<h3>${"hi"}Time</h3>`)
    $('.city').append(`<h3>${"hi"}Date</h3>`)
  }

  const setForecastConditions = (weather) => {

  }