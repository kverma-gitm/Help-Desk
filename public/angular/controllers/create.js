myApp.controller('createCtrl', ['$http', '$location', '$routeParams', 'queryService', 'authService', function ($http, $location, $routeParams, queryService, authService) {
    //check if logged
    this.logged = function () {
        if (queryService.log == 1) {
            return 1;
        } else {
            if (queryService.log == 0) {
                $location.path('/');
            }
        }
    }

    //Get the name of the user
    this.getName = function () {
        //get user if logged in
        queryService.getUser()
            .then(function successCallBack(response) {
                main.user = response.data.name;
                queryService.log = 1;
            });
    }

    var main = this;
    this.userId = $routeParams.userId;

    //createQuery
    this.createQuery = function () {

        var data = {
            queryTitle: main.queryTitle,
            queryDetails: main.queryDetails
        }

        var userId = main.userId;

        queryService.newQuery(userId, data)
            .then(function successCallBack(response) {
                main.ticketNumber = response.data.data;
                main.queryTitle = '';
                main.queryDetails = '';
                setTimeout(function () {
                    window.location.href = "#/dashboard/"+userId;
                }, 1000);

            }, function errorCallBack(response) {
                alert("Error occured.Check the console");
            });
    } 

    //logout
    this.logout = function () {
        authService.setToken();
        main.user = '';
        queryService.logged = 0;
        $location.path('/');
    }


}]);
