"use strict";

app.controller("EditCtrl", function ($routeParams, $scope, ContactService){

    $scope.contact = {};

    const getContact = () => {
        ContactService.getSingleContact($routeParams.id).then((results) => {
            $scope.contact = results.data;
            console.log(results);
        }).catch((error) => {
            console.log("error in getContact", error);
        });
    };

    getContact();

});