(function() {

    /**
     * [ViewAppointmentService description]
     * @name ViewAppointmentService.service:ViewAppointmentService
     * @ngdoc service
     */
    function ViewAppointmentService($q, $http, $rootScope, $window) {
        var self = this;

        var api = 'https://docapp.mybluemix.net/appointment/552199998888/getAll';

        self.viewAppointmentList = function() {
            var deferred = $q.defer();

            $http.get(api).then(success, fail);

            function success(result) {
                console.log('success appointment view result.data: ' + JSON.stringify(result.data));
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

    ViewAppointmentService.$inject = ['$q', '$http', '$rootScope', '$window'];

    angular.module('starter')
        .factory('ViewAppointmentService', ViewAppointmentService);
})();