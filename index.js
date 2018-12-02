// This file is in the entry point in your webpack config.
  $(document).ready(function () {
    alert("ready");
  })

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

  //


  const getRandomImage = () => {
    var photo = pageInfo["photos"][Math.floor(Math.random() * pageInfo["photos"].length)];
    return photo["url_o"];
  }

  const setBackgroundImage = () => {
    $('body').css('background-image', `url(${getRandomImage()})`);
  }

  const setLocationInfo = (info) => {
    pageInfo = {
      info: info,
      photos: info["photos"]["photo"]
    }
    setBackgroundImage();
  }

  const setWeatherInfo = (info) => {
      localStorage.setItem('weather', info);
      // pageInfo = {
      //   weather: info
      // }
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
      .then((info) => setLocationInfo(info))
      .catch((error) => console.error({ error }))
  }