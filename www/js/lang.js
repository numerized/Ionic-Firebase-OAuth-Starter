app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'LOGIN_TITLE': 'Hello',
    'LOGIN_TEXT': 'Choose a platform to sign in',
    'FACEBOOK_SIGNIN': 'Facebook Sign In',
    'TWITTER_SIGNIN': 'Twitter Sign In',
    'GOOGLE_SIGNIN': 'Google Sign In',
    'DEVICE_VIEW_TITLE': 'Device',
  	'DEVICE_LABEL':'Device Infos',
    'DEVICE_GLOBALIZATION_LABEL':'Language',
    'ACCOUNT_VIEW_TITLE':'User Account',
    'ACCOUNT_FOLLOWERS_LABEL':'Followers',
    'ACCOUNT_FOLLOWINGS_LABEL':'Followings',
    'ACCOUNT_FRIENDS_LABEL':'Friends',
    'ACCOUNT_DISCONNECT_BUTTON':'Disconnect',
    'ACCOUNT_FRIENDS_DATA':'Friends Infos',
    'ACCOUNT_INVITE_FRIENDS_BUTTON':'Invite Friends',
    'ACCOUNT_POST_STATUS_BUTTON':'Share On Facebook'
  });
 
  $translateProvider.translations('fr', {
    'LOGIN_TITLE': 'Bonjour',
    'LOGIN_TEXT': 'Choisissez une plateforme de connexion',
    'FACEBOOK_SIGNIN': 'Facebook Login',
    'TWITTER_SIGNIN': 'Twitter Login',
    'GOOGLE_SIGNIN': 'Google Login',
    'DEVICE_VIEW_TITLE': 'Système',
  	'DEVICE_LABEL':'Infos Système',
    'DEVICE_GLOBALIZATION_LABEL':'Langue',
    'ACCOUNT_VIEW_TITLE':'Compte Utilisateur',
    'ACCOUNT_FOLLOWERS_LABEL':'Abonnés',
    'ACCOUNT_FOLLOWINGS_LABEL':'Abonnements',
    'ACCOUNT_FRIENDS_LABEL':'Amis',
    'ACCOUNT_DISCONNECT_BUTTON':'Se déconnecter',
    'ACCOUNT_FRIENDS_DATA':'Infos Amis',
    'ACCOUNT_INVITE_FRIENDS_BUTTON':'Inviter Des Amis',
    'ACCOUNT_POST_STATUS_BUTTON':'Partager Sur Facebook'
  });
  $translateProvider.fallbackLanguage(['en', 'fr']);
  
}]);