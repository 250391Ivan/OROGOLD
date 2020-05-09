

 var app = angular.module("app",[]);
 app.controller("ControllerFirst", ['$scope', '$http', '$location', '$window', '$timeout', function($scope, $http, $location, $window, Excel, $timeout) {

 	var config = {
			headers: {
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;',
				'Content-Type': 'application/x-www-form-urlencoded',

			}
		};
//Enviando  el  formulario  y  mandando  las  alertas
 	$scope.SendFormulario =  function(name,correo,number){
 		 var data = $.param({
					nombre: name,
					email:correo,
					phone:number,
				});

 		 	$http.post("https://localhost/BackendOroGold/Controller_User/SaveInfoForm", data, config)
					.then(function(response) {
						console.log(response);
						 var data = response.data;
						 var data = response.data.info.code;
						
						console.log(data);
						if (data === 200) {
							$("#citaAgendada").modal('show');
						}else{
							$("#ErrorCita").modal('show');
						}
						 }, function(response) {
						
	
					});


 	};

 }]);
