define(['app', 'ngload!service/dataServices', 'directive/write', 'directive/navMenu', 'resource'], function (app) {
    app.controller('TesteController', function ($scope, $log, DeferredObject, DeferredString, $rootScope, $resource) {
        console.log($resource);
        DeferredObject.get("This is defered response", 2000).then(function (result) {
            $scope.obj_response = result;
        });
        $scope.str_response = DeferredString.get("Show case ngWrite with promise", 1000);
    })
}); 
