angular.module('giphyApp', []);

// var app = angular.module('giphyApp', []);

// app.controller('MainController', MainController);

// var API = 'http://api.giphy.com/v1/gifs/';
// var key = 'api_key=dc6zaTOxFJmzC';

// function MainController($http) {
//   var main = this;
//   console.log('MainController loaded');

//   main.randomGifs = [];
//   main.searchGifs = [];

//   main.randomGifData = function () {
//       $http.get(API + 'random?' + key)
//       .then(function (response) {
//         main.gifs = response.data.data.image_url;
//       });
//     };

//   main.searchGifData = function () {
//     main.q = main.search.replace(' ', '+');
//     $http.get(API + 'search?q=' + main.q + '&' + key)
//       .then(function (response) {
//         main.searchGifs = response.data.data;
//       });
//   }
// }
