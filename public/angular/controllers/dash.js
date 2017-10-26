myApp.controller('dashCtrl', ['$filter', '$http', '$location', '$routeParams', 'queryService', 'authService', function ($filter, $http, $location, $routeParams, queryService, authService) {

    //check if logged
    this.logged = function () {
        if (queryService.log == 1) {
            return 1;
        } else {
            $location.path('/');
        }
    }

    //Get the name of the user
    this.getName = function () {
        //get user if logged in
        queryService.getUser()
            .then(function successCallBack(response) {
                main.name = response.data.name;
                main.mobileNumber = response.data.mobileNumber;
                main.email = response.data.email;
                queryService.log = 1;
            });
    }

    this.getInfo = function() {
        //get info of all users
        queryService.allUsers()

         .then(function successCallBack(response){
            
            main.data = response.data.data;
         });
    }

    var main = this;
    this.userId = $routeParams.userId;
    this.userEmail = $routeParams.email;


    //to hide and show parts of query cards
    this.show = false;



    //get current user(checking if admin)
    this.getUser = function () {
        queryService.getUser()
            .then(function successCallBack(response) {
                main.user = response.data.name;
                if (main.user) {

                    //get all queries for admin dashboard
                    queryService.allQueries()
                        .then(function successCallBack(response) {
                            if (response.data.error === true) {
                                main.noQueriesMsg = response.data.message;
                                main.noQueriesDiv = 1;
                            } else {
                                main.adminQueries = response.data;
                                main.getQueries();
                            }
                        });


                }
            });
    }

    this.getUser();

    //get all queries of logged in user
    this.getQueries = function () {
        if (main.user === "Admin") {
            main.heading = "All Tickets for admin";
            main.allQueries = main.adminQueries;
            main.queries = main.adminQueries;
        } else {
            main.heading = "All Tickets";
            queryService.allQueriesOfAUser(main.userId)
                .then(function successCallBack(response) {
                    var data = response.data.data;
                    if (response.data.error) {
                        main.allQueries = [];
                        main.queries = [];
                    } else {
                        main.allQueries = response.data.data;
                        main.queries = response.data.data;
                    }
                }, function errorCallBack(response) {
                    alert("Error!! Check console");
                });
        }
    } 

    //filter open tickets
    this.open = function () {
        main.queries = $filter('filter')(main.allQueries, {
            ticketStatus: "Open"
        });
    } //end

    //filter closed tickets
    this.close = function () {
        main.queries = $filter('filter')(main.allQueries, {
            ticketStatus: "Close"
        });
    } //end

    //filter all tickets
    this.all = function () {
        main.queries = main.allQueries;
    } //end



    //delete query
    this.deleteQuery = function (tno, index) {
        queryService.deleteAQuery(tno)
            .then(function successCallBack(response) {
                main.queries.splice(index, 1);
            }, function errorCallBack(response) {
                alert("Error!! Check console");
            });

    } 

    //open/close a query
    this.openclose = function (tno) {
        queryService.openClose(tno)
            .then(function successCallBack(response) {
                main.getQueries();
            }, function errorCallBack(response) {
                alert("Error!! Check console");
            });
    } 

    //get status of query(open/close)
    this.getStatus = function (index) {

        var query = main.queries[index];
        // console.log(query)
        var status = query.ticketStatus;
        if (status === "Open") {
            return "Close Ticket";
        } else {
            return "Reopen Ticket"
        }
    } 

    //logout
    this.logout = function () {
        authService.setToken();
        main.user = '';
        queryService.logged = 0;
        $location.path('/');
    }

}]);
