import ContactCollection from '../db/models/Contacts.js';
import calculatePaginationData from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({ perPage, page }) => {
  const skip = (page - 1) * perPage;
  const contacts = await ContactCollection.find().skip(skip).limit(perPage);
  const totalItem = await ContactCollection.find().countDocuments();

  const paginationData = calculatePaginationData({ totalItem, perPage, page });

  return {
    contacts,
    page,
    perPage,
    totalItem,
    ...paginationData,
  };
};
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
