app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'LOGIN_TITLE': 'Hello',
    'LOGIN_TEXT': 'Choose a platform to sign in'
  });
 
  $translateProvider.translations('fr', {
    'TITLE': 'Bonjour',
    'FOO': 'Choisissez une plateforme de connexion'
  });
 
  $translateProvider.preferredLanguage('fr');
}]);