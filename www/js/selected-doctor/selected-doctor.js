'use strict';

angular
    .module('selectedDoctor.module')
    .config(function config($stateProvider) {
        $stateProvider
            .state('app.selectedDoctor', {
                url: '/selectedDoctor/:DOCTOR_ID',
                views: {
                    'menuContent': {
                        templateUrl: 'js/selected-doctor/selected-doctor.html',
                        controller: 'selectedDoctorCtrl',
                        service: 'SelectedDoctorService'
                    }
                }
            })
    });