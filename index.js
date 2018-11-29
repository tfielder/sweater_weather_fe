// This file is in the entry point in your webpack config.

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
    const url = "https://whether-to-weather.herokuapp.com/api/v1/backgrounds?location=" + location;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(locationPicture) {
        JSON.stringify(locationPicture);
        //debugger;
      });
  });

