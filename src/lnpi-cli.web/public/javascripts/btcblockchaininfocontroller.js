'option strict';

angular.module('HelloWorldApp', [])
  .controller('BtcBlockchainInfoController',
    function ($scope, $http) {
      // setup scope
      $scope.isLoading = true;
      $scope.chain = 'Loading...';

      $http.get('/api/btc/')
        .then(function (response) {
          if (response.status == 200) {
            // Copy data from service to scope
            $scope.chain = response.data.chain;
            $scope.downloadedBlocks = response.data.blocks;
            $scope.downloadedHeaders = response.data.headers;
            $scope.difficulty = response.data.difficulty;
            $scope.medianTime = response.data.mediantime;
            $scope.sizeOnDisk = response.data.size_on_disk;
            $scope.progress = response.data.verificationprogress;
            $scope.softforks = response.data.softforks;
            $scope.bip9_softforks = response.data.bip9_softforks;
            $scope.warnings = response.data.warnings;
          } else {
            $scope.error = "Kaboom!";
          }
          $scope.isLoading = false;
        });
    }
);

angular.module('HelloWorldApp', [])
  .controller('BtcBlockchainInfoController',
    function ($scope, $http) {
      // setup scope
      $scope.isLoading = true;
      $scope.chain = 'Loading...';

      $http.get('/api/btc/')
        .then(function (response) {
          if (response.status === 200) {
            angular.extend($scope, response.data);
            $scope.in_error = false;         
          } else {
            $scope.in_error = true;            
            $scope.error = "Kaboom!";
          }
          $scope.is_loading = false;
        });
    }
  );

