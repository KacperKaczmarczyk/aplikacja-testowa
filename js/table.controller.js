angular.module('aplikacjaTestowa')
  .controller('tableController', ['$scope', 'Items', tableController]);

function tableController($scope, Items) {
  
  $scope.table = Items.getAll();
  $scope.newItem = {};

  $scope.submit = function () {
    $scope.table = Items.add($scope.newItem);
    $scope.newItem = {};
  };

  $scope.delete = function (item) {
    $scope.table = Items.remove(item);
  };
  
}

