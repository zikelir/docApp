(function() {

    /**
     * [MakeAppointmentService description]
     * @name SelectedDoctorService.service:SelectedDoctorService
     * @ngdoc service
     */
    function SelectedDoctorService($q, $http, $rootScope, $window) {
        // var docId = $stateParams.DOCTOR_ID;
        // console.log(docId, " DOC ID");

        // var docIdToService;
        // var getDocIdFromController = function(docId) {
        //     docIdToService = docId;
        //     console.log(docIdToService, " docIdToService");
        // }
        // getDocIdFromController();

        var self = this;

        self.getDocAgenda = function(docId) {
            var api = 'https://docapp.mybluemix.net/schedule/' + docId + '/2017/get';
            console.log(api, " API");
            var deferred = $q.defer();

            $http.get(api).then(success, fail);

            function success(result) {
                console.log('success doctors agenda result.data: ' + JSON.stringify(result.data));
                deferred.resolve(result.data);
            }

            function fail(error) {
                console.error('Error loading selected doctor service: ' + error);
                deferred.reject(error.data);
            }

            return deferred.promise;
        };

        self.markAppointment = function(scheduleId) {
            var api = 'https://docapp.mybluemix.net/appointment/new/552199998888/' + scheduleId + '/';
            console.log(api, " API");
            var deferred = $q.defer();

            $http.get(api).then(success, fail);

            function success(result) {
                console.log('success doctors agenda result.data: ' + JSON.stringify(result.data));
                deferred.resolve(result.data);
            }

            function fail(error) {
                console.error('Error loading selected doctor service: ' + error);
                deferred.reject(error.data);
            }

            return deferred.promise;
        };

        // self.markAppointment = function(obj) {
        //     var api = 'https://docapp.mybluemix.net/appointment/add';
        //     console.log(api, " API");
        //     var deferred = $q.defer();

        //     $http.post(api, obj).then(success, fail);

        //     function success(result) {
        //         console.log('success inserting into agenda result.data: ' + JSON.stringify(result.data));
        //         deferred.resolve(result.data);
        //     }

        //     function fail(error) {
        //         console.error('Error loading selected doctor service: ' + error);
        //         deferred.reject(error.data);
        //     }

        //     return deferred.promise;
        // }

        return self;
    }

    SelectedDoctorService.$inject = ['$q', '$http', '$rootScope', '$window'];

    angular.module('starter')
        .factory('SelectedDoctorService', SelectedDoctorService);
})();