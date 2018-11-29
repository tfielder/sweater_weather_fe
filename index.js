// This file is in the entry point in your webpack config.
  let pageInfo = {};

  $("button").each(function () {
    $(this).css("cursor", "pointer");
  });

  $(".submit").each(function () {
    $(this).css("cursor", "pointer");
  });

  $(".login-button").click(function () {
    $(".login-modal").show();
  });

  $(".signup-button").click(function () {
    $(".signup-modal").show();
  });

  $(".location-button").click(function () {
    $(".location-modal").show();
  });

  $(".location-search").click(function (){
    var locale = $("#location").val();
    getWeather(locale);
  });

  const getWeather = (locale) => {
    const url = "https://whether-to-weather.herokuapp.com/api/v1/backgrounds?location=" + locale;
    fetch(url)
      .then((response) => response.json())
      .then((info) => setLocationInfo(info))
      .catch((error) => console.error({ error }))
  }

  const setLocationInfo = (weather) => {
    pageInfo = {
      info: weather
    }
  }

  console.log(getWeather());

