/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";

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
	$(".location-search").click(function () {
	  var locale = $("#location").val();
	  getWeather(locale);
	  getPhotos(locale);
	  $(".location-modal").hide();
	});

	var getRandomImage = function getRandomImage() {
	  var photos_object = JSON.parse(localStorage.getItem('photos'));
	  var photos = photos_object["photos"]["photo"];
	  var photo = choosePhoto(photos);
	  return photo;
	};

	var choosePhoto = function choosePhoto(photos) {
	  var photo = randomizePhoto(photos);
	  while (typeof photo === "undefined") {
	    photo = randomizePhoto(photos);
	  }
	  return photo;
	};

	var randomizePhoto = function randomizePhoto(photos) {
	  return photos[Math.floor(Math.random() * photos.length)]["url_o"];
	};

	var setBackgroundImage = function setBackgroundImage() {
	  $('body').css('background-image', "url(" + getRandomImage() + ")");
	};

	var setPhotoInfo = function setPhotoInfo(info) {
	  localStorage.setItem('photos', JSON.stringify(info));
	  setBackgroundImage();
	};

	var setWeatherInfo = function setWeatherInfo(info, locale) {
	  localStorage.setItem('weather', JSON.stringify(info));
	  var weather = JSON.parse(localStorage.getItem('weather'));
	  setCurrentConditions(weather);
	  setLocationInformation(locale);
	  setForecastConditions();
	  setExtendedForecastConditions();
	};

	var getWeather = function getWeather(locale) {
	  var url = "https://whether-to-weather.herokuapp.com/api/v1/forecast?location=" + locale;
	  fetch(url).then(function (response) {
	    return response.json();
	  }).then(function (info) {
	    return setWeatherInfo(info, locale);
	  }).catch(function (error) {
	    return console.error({ error: error });
	  });
	};

	var getPhotos = function getPhotos(locale) {
	  var url = "https://whether-to-weather.herokuapp.com/api/v1/backgrounds?location=" + locale;
	  fetch(url).then(function (response) {
	    return response.json();
	  }).then(function (info) {
	    return setPhotoInfo(info);
	  }).catch(function (error) {
	    return console.error({ error: error });
	  });
	};

	var setCurrentConditions = function setCurrentConditions(weather) {
	  $('.current-con').empty();
	  $('.current-con').append("<p>" + weather["currently"]["icon"] + "</p>");
	  $('.current-con').append("<h3>" + weather["currently"]["summary"] + "</h3>");
	  $('.current-con').append("<h1>" + weather["currently"]["temperature"] + " &deg;F</h1>");
	  $('.current-con').append("<h3>High: " + weather["daily"]["data"][0]["temperatureHigh"] + "</h3>");
	  $('.current-con').append("<h3>Low: " + weather["daily"]["data"][0]["temperatureLow"] + "</h3>");
	};

	var setLocationInformation = function setLocationInformation(locale) {
	  $('.city').empty();
	  $('.city').append("");
	  $('.city').append("<h1>" + "hi" + "City</h1>");
	  $('.city').append("<h2>" + "hi" + "Country</h2>");
	  $('.city').append("<h3>" + "hi" + "Time</h3>");
	  $('.city').append("<h3>" + "hi" + "Date</h3>");
	};

	var setForecastConditions = function setForecastConditions(weather) {};

/***/ })
/******/ ]);