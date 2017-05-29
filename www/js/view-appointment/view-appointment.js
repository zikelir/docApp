'use strict';

angular
    .module('viewAppointment.module')
    .config(function config($stateProvider) {
        $stateProvider
            .state('app.viewAppointment', {
                url: '/viewAppointment',
                views: {
                    'menuContent': {
                        templateUrl: 'js/view-appointment/view-appointment.html',
                        controller: 'viewAppointmentCtrl',
                        service: 'ViewAppointmentService'
                    }
                }
            })
    });