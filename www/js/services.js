app.factory('FirebaseConfig', function() {
	var root_url = 'https://quality-actions.firebaseio.com';
	var lol;
	
	  return {
	  		'root_url': root_url, 
	  		'welcome_message': root_url+'/welcome_message'
	  	};  
});