"use strict";

app.controller("NewCtrl", function ($location, $rootScope, $scope, ContactService) {

    $scope.submitForm = () => {
        let newContact = $scope.contact;
        $scope.contact.uid = $rootScope.uid;
        console.log(newContact);
        ContactService.addNewContact(newContact).then(() => {
            $location.path('contacts/view');
        }).catch((error) => {
            console.log("error in submit", error);
        });
    };

});