app.factory('FirebaseConfig', function() {
	var root_url = 'https://quality-actions.firebaseio.com';
	var pull me;
	
	  return {
	  		'root_url': root_url, 
	  		'welcome_message': root_url+'/welcome_message'
	  	};  
});