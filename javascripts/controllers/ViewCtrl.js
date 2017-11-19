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

    $scope.deleteContact = (contactId) => {
        ContactService.deleteContact(contactId).then((result) => {
            getContacts();
        }).catch((error) => {
            console.log("error in deleteContact", error);
        });
    };


    $scope.starChange = (contact) => {
        let updateContact = {};

        if (!contact.isFavorited){
            updateContact = ContactService.createContactObject(contact);
        } else{
            updateContact = ContactService.createContactObject(contact);
            updateContact.isFavorited = false;
        }

        ContactService.updateContact(updateContact, contact.id).then(() => {
            getContacts();
        }).catch((error) => {
            console.log("error in starChange", error);
        });
        
    };
    
});