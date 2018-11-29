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

  