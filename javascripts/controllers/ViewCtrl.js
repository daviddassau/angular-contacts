"use strict";

app.controller("ViewCtrl", function ($rootScope, $scope, ContactService) {
    
    const getContacts = () => {
        ContactService.getUserContact($rootScope.uid).then((results) => {
            $scope.contact = results;
        }).catch((error) => {
            console.log("error in getContacts", error);
        });
    };

    getContacts();
    
});