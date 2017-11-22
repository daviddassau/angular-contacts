"use strict";

app.controller("DetailCtrl", function ($routeParams, $scope, ContactService){

    $scope.contact = {};

    const getContact = () => {
        ContactService.getSingleContact($routeParams.id).then((results) => {
            $scope.contact = results.data;
        }).catch((error) => {
            console.log("error in getSingleContact", error);
        });
    };

    getContact();
    
    $scope.starChange = (contact) => {
        let updateContact = {};

        if (!contact.isFavorited) {
            updateContact = ContactService.createContactObject(contact);
        } else {
            updateContact = ContactService.createContactObject(contact);
            updateContact.isFavorited = false;
        }

        ContactService.updateContact(updateContact, $routeParams.id).then(() => {
            getContact();
        }).catch((error) => {
            console.log("error in starChange", error);
        });

    };

});