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

    const updateContact = (contact, contactId) => {
        return $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`, JSON.stringify(contact));
    };

    const createContactObject = (contact) => {
        return {
            "firstName": contact.firstName,
            "lastName": contact.lastName,
            "phoneNumber": contact.phoneNumber,
            "birthday": contact.birthday,
            "relationToMe": contact.relationToMe,
            "car": contact.car,
            "hairColor": contact.hairColor,
            "isFavorited": true,
            "uid": contact.uid
        };
    };

    const getSingleContact = (contactId) => {
        return $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
    };

    return {getUserContact, addNewContact, deleteContact, updateContact, createContactObject, getSingleContact};
});