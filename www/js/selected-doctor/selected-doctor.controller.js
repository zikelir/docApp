angular.module('selectedDoctor.module', ['ionic', 'ui.router', 'ionic-datepicker']);


angular.module('selectedDoctor.module')
    .controller('selectedDoctorCtrl', function($scope, $rootScope, $state, $stateParams, $ionicSideMenuDelegate, $ionicHistory, ionicDatePicker, MakeAppointmentService, SelectedDoctorService) {
        //DATE PICKER 

        var docId = $stateParams.DOCTOR_ID;
        console.log(docId, " DOC ID");

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


        $scope.docAgenda;

        $scope.clearSearch = function() {
            $scope.search = '';
        };

        function passIdDocAgenda() {
            // $ionicLoading.show();
            SelectedDoctorService.getDocAgenda(docId).then(success, fail);

            function success(data) {
                // $ionicLoading.hide();
                // $scope.$broadcast('scroll.refreshComplete');
                $scope.agenda = data;
                console.log(data);
            }

            function fail(error) {
                // $ionicLoading.hide();
                // $scope.$broadcast('scroll.refreshComplete');

                console.log("Error occured!", JSON.stringify(error));
            }
        }

        // $scope.selectScheduleId = function(idPassedFromNgClick) {
        //     console.log(idPassedFromNgClick);
        // }

        $scope.markAgenda = function(scheduleId) {
            console.log(scheduleId);

            // $ionicLoading.show();
            SelectedDoctorService.markAppointment(scheduleId).then(success, fail);

            function success(data) {
                // $ionicLoading.hide();
                // $scope.$broadcast('scroll.refreshComplete');
                $scope.marked = data;
                console.log(data);
                alert('Scheduled on desired hour!');
                $state.go('app.viewAppointment');
            }

            function fail(error) {
                // $ionicLoading.hide();
                // $scope.$broadcast('scroll.refreshComplete');
                alert("couldn\'t schedule!!");

                console.log("Error occured!", JSON.stringify(error));
            }
        }



        $scope.$on("$ionicView.enter", function(scopes, states) {
            passIdDocAgenda();
        });


    }).filter('searchAgenda', function() {
        return function(items, query) {
            var filtered = [];
            var letterMatch = new RegExp(query, 'i');
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (query) {
                    if (letterMatch.test(item.START_TIME.substring(0, query.length))) {
                        filtered.push(item);
                    }
                } else {
                    filtered.push(item);
                }
            }
            return filtered;
        };
    });