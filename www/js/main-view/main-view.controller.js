angular.module('mainView.module', ['ionic', 'ui.router']);

angular.module('mainView.module')
    .controller('mainViewCtrl', function($scope, $state, $ionicSideMenuDelegate, $ionicHistory) {

        $scope.user = {
            "name": "John Smith",
            "personalInfo": {
                "age": 27,
                "address": "Avenida Pasteur",
                "phone": "+55 (21) 99998888",
                "userType": 3,
                "id": 552199998888
            },
            "userInfoComments": 2,
            "userInfoLikes": 5
        };

        var date = new Date();
        $scope.today = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();
        // $scope.today = date.getDate() + "/" + date.getMonth() + "/" + date.getYear();
        // console.log(date.getDate() + " getdate");
        // console.log(date.getMonth() + " getmonth");
        // console.log(date.getFullYear() + " getyear");

        // (id,name,login,Loginpw,usertype,InsurancePlanid,Email) values (552199998888,‘John Smith’, ‘johns’, ‘welcome’,‘U’, 3,‘johns@email.com’);


        $ionicSideMenuDelegate.canDragContent(true);
    });