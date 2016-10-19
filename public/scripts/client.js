var app = angular.module('giphyApp', []);

app.controller('MainController', MainController);

var API = 'http://api.giphy.com/';

function MainController($http) {
  var main = this;
  console.log('MainController loaded');

  main.gifs = '';
  // main.lines = [];
  main.getGifData = function () {
    // main.gifs = '';
    // main.class = '';
    console.log('inside getGifData');
    console.log('main.selected', main);
      $http.get(main.gifs)
      .then(function (response) {
        console.log('getGifData response', response);
      main.gifs = response;
      // main.class = 'scroll';
      });
    };

  // ask the API for the films thru a promise
  $http.get(API + 'v1/gifs/random', { params: { api_key: 'dc6zaTOxFJmzC' } })
    .then(function (response) {
      console.log('$http get response:', response);
      main.gifs = response.data.data.image_url;
    });
}
