import ContactCollection from '../db/models/Contacts.js';

export const getAllContacts = () => ContactCollection.find();
export const getContactById = (contactId) =>
  ContactCollection.findById(contactId);
export const createContact = (payload) => ContactCollection.create(payload);
export const upsertContact = async (contactId, payload, options = {}) => {
  ContactCollection.findOneAndUpdate({ _id: contactId }, payload, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });
};
export const deleteContact = async (contactId) => {
  ContactCollection.findByIdAndDelete(contactId);
};
