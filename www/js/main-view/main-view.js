'use strict';

angular
    .module('mainView.module')
    .config(function config($stateProvider) {
        $stateProvider
            .state('app.mainView', {
                url: '/mainView',
                views: {
                    'menuContent': {
                        templateUrl: 'js/main-view/main-view.html',
                        controller: 'mainViewCtrl'
                    }
                }
            })
    });