"use strict";

app.controller("EditCtrl", function ($routeParams, $scope, ContactService){

    $scope.contact = {};

    const getContact = () => {
        ContactService.getUserContact($routeParams.id).then((results) => {
            $scope.contact = results.data;
        }).catch((error) => {
            console.log("error in getContact", error);
        });
    };

    getContact();

});