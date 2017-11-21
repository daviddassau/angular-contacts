"use strict";

app.controller("NewCtrl", function ($location, $rootScope, $scope, ContactService) {

    $scope.submitForm = (contact) => {
        let newContact = $scope.contact;
        newContact.uid = $rootScope.uid;
        ContactService.addNewContact(newContact).then(() => {
            $location.path('contacts/view');
        }).catch((error) => {
            console.log("error in submit", error);
        });
    };

});