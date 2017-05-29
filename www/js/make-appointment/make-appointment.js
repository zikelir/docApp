'use strict';

angular
    .module('makeAppointment.module')
    .config(function config($stateProvider) {
        $stateProvider
            .state('app.makeAppointment', {
                url: '/makeAppointment',
                views: {
                    'menuContent': {
                        templateUrl: 'js/make-appointment/make-appointment.html',
                        controller: 'makeAppointmentCtrl',
                        service: 'MakeAppointmentService'
                    }
                }
            })
    });