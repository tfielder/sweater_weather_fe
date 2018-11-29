// This file is in the entry point in your webpack config.
  // let pageData = {
  //
  // };

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
    var location = $("#location").val();
    getWeather();
  });

  // function getWeather() {
  //   const url = "https://whether-to-weather.herokuapp.com/api/v1/backgrounds?location=" + location;
  //   fetch(url, {
  //     mode: 'no-cors'
  //     }).then(function(response) {
  //       console.log(response.status)
  //       console.log(response.json())
  //     //  return response.json()
  //     }).then(function(locationPicture) {
  //       JSON.stringify(locationPicture)
  //     });
  // }
  //
  // getWeather();

