import ContactCollection from '../db/models/Contacts.js';

export const getAllContacts = () => ContactCollection.find();
export const getContactById = (contactId) =>
  ContactCollection.findById(contactId);
export const createContact = (payload) => ContactCollection.create(payload);
export const updateContact = async (contactId, payload, options = {}) => {
  const rawResult = await ContactCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;
  return {
    data: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const deleteContact = async (contactId) => {
  return await ContactCollection.findOneAndDelete({ _id: contactId });
};
