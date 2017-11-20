"use strict";

app.controller("EditCtrl", function ($location, $routeParams, $scope, ContactService){

    $scope.contact = {};

    const getContact = () => {
        ContactService.getSingleContact($routeParams.id).then((results) => {
            $scope.contact = results.data;
            console.log("results", results);
        }).catch((error) => {
            console.log("error in getContact", error);
        });
    };

    getContact();

    $scope.updateContactInFirebase = () => {
        ContactService.updateContact($scope.contact, $scope.contact.id).then(() => {
            console.log("updateContact function was triggered", $scope.contact, $scope.contact.id);
            $location.path("/contacts/view");
        }).catch((error) => {
            console.log("error in updateContactInFirebase", error);
        });
    };

});