// This file is in the entry point in your webpack config.
$(document).ready(function () {

  $("button").each(function () {
    $(this).css("cursor", "pointer");
  });

  $(".submit").each(function () {
    $(this).css("cursor", "pointer");
  });

  $(".js-login-button").click(function () {
    $(".login-modal").show();

  });

});