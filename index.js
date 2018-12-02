// This file is in the entry point in your webpack config.

  let pageInfo = {};

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

  const setWeatherInfo = (info) => {
    localStorage.setItem('weather', JSON.stringify(info));
    setCurrentConditions();
    setForecastConditions();
    setExtendedForecastConditions();
  }

  const getWeather = (locale) => {
    const url = "https://whether-to-weather.herokuapp.com/api/v1/forecast?location=" + locale;
    fetch(url)
    .then((response) => response.json())
    .then((info) => setWeatherInfo(info))
    .catch((error) => console.error({ error }))
  }

  const getPhotos = (locale) => {
    const url = "https://whether-to-weather.herokuapp.com/api/v1/backgrounds?location=" + locale;
    fetch(url)
      .then((response) => response.json())
      .then((info) => setPhotoInfo(info))
      .catch((error) => console.error({ error }))
  }

  const setCurrentConditions = () => {
    debugger;
    $('.current-con').empty();
    $('.current-con').append(`<p>Colorado!<p>`);

  }