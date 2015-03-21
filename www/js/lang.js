app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
<<<<<<< HEAD
    'LOGIN_TITLE': 'Welcome Swipe',
=======
    'LOGIN_TITLE': 'Welcome Base',
>>>>>>> upstream/master
    'LOGIN_TEXT': 'Choose your way to sign in',
    'INTERNAL_LOGIN_TEXT': 'Connect with an existing account',
    'FACEBOOK_SIGNIN': 'Facebook ',
    'TWITTER_SIGNIN': 'Twitter',
    'GOOGLE_SIGNIN': 'Google',
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
    'ACCOUNT_POST_STATUS_BUTTON':'Share On Facebook',
    'USER_REGISTER_BUTTON' : 'Create My Account',
    'REGISTER_TITLE': 'Create My Account',
    'REGISTER_TEXT': "Please provide your email and a password",
    'REGISTER' : 'Sign Up',
    'CANCEL_REGISTER': "Go Back",
    'LOGIN_BUTTON':'Sign In',
    'LOGIN_EMAIL_LABEL':'Email Address',
    'LOGIN_PASSWORD_LABEL':'Password',
    'LOGIN_INVALID_PASSWORD': 'Invalid Password',
    'LOGIN_INVALID_USER': 'Invalid User'
  });
 
  $translateProvider.translations('fr', {
<<<<<<< HEAD
    'LOGIN_TITLE': 'Bienvenue Swipe',
=======
    'LOGIN_TITLE': 'Bienvenue Base',
>>>>>>> upstream/master
    'LOGIN_TEXT': 'Choisissez votre méthode de connexion',
    'INTERNAL_LOGIN_TEXT': 'Se connecter avec un compte existant',
    'FACEBOOK_SIGNIN': 'Facebook',
    'TWITTER_SIGNIN': 'Twitter',
    'GOOGLE_SIGNIN': 'Google',
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
    'ACCOUNT_POST_STATUS_BUTTON':'Partager Sur Facebook',
    'USER_REGISTER_BUTTON' : 'Créer Mon Compte',
    'REGISTER_TITLE': 'Créer Mon Compte',
    'REGISTER_TEXT': "Merci d'indiquer votre email et un mot de passe",
    'REGISTER' : "M'enregistrer",
    'CANCEL_REGISTER': "Retour",
    'LOGIN_BUTTON':'Se Connecter',
    'LOGIN_EMAIL_LABEL':'Adresse Email',
    'LOGIN_PASSWORD_LABEL':'Mot de Passe',
    'LOGIN_INVALID_PASSWORD': 'Mot de Passe Erroné',
    'LOGIN_INVALID_USER': 'Utilisateur Non Valide'
  });
  $translateProvider.fallbackLanguage(['en', 'fr']);
  
}]);