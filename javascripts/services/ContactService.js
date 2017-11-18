"use strict";

app.service("ContactService", function ($http, $q, FIREBASE_CONFIG) {

    const getUserContact = (userUid) => {
        let contact = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
                let fbContacts = results.data;
                Object.keys(fbContacts).forEach((key) => {
                    fbContacts[key].id = key;
                    contact.push(fbContacts[key]);
                    console.log(contact);
                });
                resolve(contact);
            }).catch((error) => {
                reject(error);
            });
        });
    };

    const addNewContact = (newContact) => {
        return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact));
    };

    const deleteContact = (contactId) => {
        return $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
    };

    return {getUserContact, addNewContact, deleteContact};
});