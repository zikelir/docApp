angular.module('viewAppointment.module', ['ionic', 'ui.router', 'ionic-datepicker']);


angular.module('viewAppointment.module')
    .controller('viewAppointmentCtrl', function($scope, $state, $ionicSideMenuDelegate, $ionicHistory, ionicDatePicker, ViewAppointmentService) {

        //DATE PICKER 
        var ipObj1 = {
            callback: function(val) { //Mandatory
                console.log('Return value from the datepicker popup is : ' + val, new Date(val));
            },
            disabledDates: [ //Optional
                new Date(2016, 2, 16),
                new Date(2015, 3, 16),
                new Date(2015, 4, 16),
                new Date(2015, 5, 16),
                new Date('Wednesday, August 12, 2015'),
                new Date("08-16-2016"),
                new Date(1439676000000)
            ],
            from: new Date(2017, 04, 01), //Optional
            to: new Date(2017, 06, 30), //Optional
            inputDate: new Date(), //Optional
            mondayFirst: true, //Optional
            disableWeekdays: [0], //Optional
            closeOnSelect: false, //Optional
            templateType: 'popup' //Optional
        };

        $scope.openDatePicker = function() {
            ionicDatePicker.openDatePicker(ipObj1);
        };

        //activate side menu
        $ionicSideMenuDelegate.canDragContent(true);

        $scope.docList;

        $scope.clearSearch = function() {
            $scope.search = '';
        };

        function getAppointmentList() {
            // $ionicLoading.show();
            ViewAppointmentService.viewAppointmentList().then(success, fail);

            function success(data) {
                // $ionicLoading.hide();
                // $scope.$broadcast('scroll.refreshComplete');
                console.log(data);
                $scope.appointmentList = data;

            }

            function fail(error) {
                // $ionicLoading.hide();
                // $scope.$broadcast('scroll.refreshComplete');

                console.log("Error occured!", JSON.stringify(error));
            }
        }

        $scope.$on("$ionicView.enter", function(scopes, states) {
            getAppointmentList();
        });

        function getDocList() {
            // $ionicLoading.show();
            MakeAppointmentService.getDocList().then(success, fail);

            function success(data) {
                // $ionicLoading.hide();
                // $scope.$broadcast('scroll.refreshComplete');
                console.log(data);
                $scope.docList = data;

            }

            function fail(error) {
                // $ionicLoading.hide();
                // $scope.$broadcast('scroll.refreshComplete');

                console.log("Error occured!", JSON.stringify(error));
            }
        }

        $scope.$on("$ionicView.enter", function(scopes, states) {
            getDocList();
        });


    });