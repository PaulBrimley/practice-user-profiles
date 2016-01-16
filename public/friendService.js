angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {
    
    login: function( user ) {
    	return $http({
    		method: 'POST',
    		data: user,
    		url: 'http://localhost:3000/api/login'
    	}).then(function(response) {

    		return response;
    	})
    },

    getFriends: function() {
    	return $http({
    		method: 'GET',
    		url: 'http://localhost:3000/api/profiles'
    	}).then(function(response) {
    		return response;
    	})
    }
  }
});