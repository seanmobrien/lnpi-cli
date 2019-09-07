'option strict';

angular.module('LnPiCliApp', [])
  .controller('BtcBlockchainInfoController',
    function ($scope, $http) {
      // setup scope
      $scope.is_loading = true;
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
          $scope.is_loading = false;
        });
    }
)
/*  ;
angular.module('HelloWorldApp', [])
*/
  .controller('BtcPeerListController',
    function ($scope, $http) {
      // setup scope
      $scope.is_loading = true;
      $scope.peer_list = [];
      $http.get('/api/btc/peer/list')
        .then(function (response) {
          if (response.status === 200) {
            $scope.peer_list = response.data;
            $scope.count = response.data.length;
            $scope.in_error = false;         
          } else {
            $scope.in_error = true;            
            $scope.error = "Kaboom!";
          }
          $scope.is_loading = false;
        });
    }
  );

