"use strict";

app.controller("LoginCtrl", function($scope, AuthService){
    $scope.authenticate = () => {
        AuthService.authenticateGoogle().then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log("error in authenticateGoogle", error);
        });
    };
});