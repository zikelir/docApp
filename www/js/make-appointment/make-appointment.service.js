(function() {

    /**
     * [MakeAppointmentService description]
     * @name MakeAppointmentService.service:MakeAppointmentService
     * @ngdoc service
     */
    function MakeAppointmentService($q, $http, $rootScope, $window) {
        var self = this;

        var api = '';


        self.getDocList = function() {
            var deferred = $q.defer();

            $http.get(api).then(success, fail);

            function success(result) {
                console.log('success doctors result.data: ' + JSON.stringify(result.data));
                deferred.resolve(result.data);
            }

            function fail(error) {
                console.error('Error loading make appointment service: ' + error);
                deferred.reject(error.data);
            }

            return deferred.promise;
        };

        return self;
    }

    MakeAppointmentService.$inject = ['$q', '$http', '$rootScope', '$window'];

    angular.module('starter')
        .factory('MakeAppointmentService', MakeAppointmentService);
})();