import ContactCollection from './db/models/Contacts.js';

export const getAllContacts = () => ContactCollection.find();
