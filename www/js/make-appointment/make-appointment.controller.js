angular.module('makeAppointment.module', ['ionic', 'ui.router', 'ionic-datepicker']);


angular.module('makeAppointment.module')
    .controller('makeAppointmentCtrl', function($scope, $state, $ionicSideMenuDelegate, $ionicHistory, ionicDatePicker, MakeAppointmentService) {

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


    })
    .filter('searchContacts', function() {
        return function(items, query) {
            var filtered = [];
            var letterMatch = new RegExp(query, 'i');
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (query) {
                    if (letterMatch.test(item.SPECIALTY.substring(0, query.length))) {
                        filtered.push(item);
                    }
                } else {
                    filtered.push(item);
                }
            }
            return filtered;
        };
    });