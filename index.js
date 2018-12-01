// This file is in the entry point in your webpack config.

  // const hideModal = (modalType) => {
  //   $(`.${modalType}-modal`).hide();
  // }
  //
  // $(document).ready(function () {
  //   hideModal('login'));
  //   hideModal('signup'));
  //   hideModal('location'));
  // });

  $("button").each(function () {
    $(this).css("cursor", "pointer");
  });

  $(".submit").each(function () {
    $(this).css("cursor", "pointer");
  });

  const showModal = (modalType) => {
    $(`.${modalType}-modal`).show();
    modalType.stopPropagation();
  }

  // $(".login-button").click(function () {
  //   $(".login-modal").show();
  // });
  $(".login-button").on('click', showModal('login'));

  // $(".signup-button").click(function () {
  //   $(".signup-modal").show();
  // });
  $(".signup-button").on('click', showModal('signup'));

  // $(".location-button").click(function () {
  //   $(".location-modal").show();
  // });
  $(".location-button").on('click', showModal('location'));

