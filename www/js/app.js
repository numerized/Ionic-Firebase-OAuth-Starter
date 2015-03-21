// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'login.controllers', 'ngResource', 'firebase', 'ngCordova', 'ngCordovaOauth', 'pascalprecht.translate'])

.run(function($ionicPlatform, $rootScope, $cordovaDevice, $cordovaGlobalization, $translate, $cordovaStatusbar) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      $cordovaStatusbar.style();
      //$cordovaStatusbar.hide();
    }

    if (window.navigator.language)
    {
      $rootScope.globalization = {"value": window.navigator.language};
      $translate.use($rootScope.globalization.value);
    }
    else if (window.navigator.userLanguage)
    {
      $rootScope.globalization = {"value": window.navigator.userLanguage};
      $translate.use($rootScope.globalization.value);
    }

    $rootScope.device = $cordovaDevice.getDevice();
    console.log($rootScope.device);

    $cordovaGlobalization.getPreferredLanguage().then(
      function(result) {
        $rootScope.globalization = result;
        $rootScope.globalization.value = $rootScope.globalization.value.substring(0,2);
        $translate.use($rootScope.globalization.value);
        // result
      },
      function(error) {
        $rootScope.globalization = error;
        // error
    });

  });
})

.config(function($stateProvider, $urlRouterProvider, $translateProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
    controller: 'LoginCtrl'
  })

  .state('register', {
    url: "/register",
    templateUrl: "templates/register.html",
    controller: 'RegisterCtrl'
  })

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
