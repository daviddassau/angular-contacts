"use strict";

app.controller("EditCtrl", function ($location, $routeParams, $scope, ContactService){

    $scope.contact = {};

    const getContact = () => {
        ContactService.getSingleContact($routeParams.id).then((results) => {
            $scope.contact = results.data;
        }).catch((error) => {
            console.log("error in getContact", error);
        });
    };

    getContact();

    $scope.updateContactInFirebase = () => {
        ContactService.updateContact($scope.contact, $routeParams.id).then(() => {
            $location.path("/contacts/view");
        }).catch((error) => {
            console.log("error in updateContactInFirebase", error);
        });
    };

});