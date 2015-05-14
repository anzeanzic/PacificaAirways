angular.module('PacificaAirways', []);
angular.module('PacificaAirways').controller('PAController', function($scope) {
	$scope.totalCosts = 0;
	$scope.departureAirportsArray = [{ name: 'Ljubljana', price: 100 }, { name: 'Maribor', price: 200}, { name: 'Gradec', price: 300 }];
	$scope.arrivalAirportsArray = [{ name: 'London Gatwick', price: 100 }, { name: 'London Heathrow', price: 200 }];

	$scope.submitForm = function() {
		alert("Naročilo uspešno oddano!");
	}
	
	$scope.CalculateCosts = function(departureAirport, arrivalAirport) {
		if (departureAirport !== undefined && arrivalAirport !== undefined) {
			return departureAirport.price + arrivalAirport.price;
		}
		else {
			return 0;
		}
	}
});