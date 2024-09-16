import * as contactServices from '../services/contacts.js';

export const getAllContactsController = async (req, res) => {
  try {
    const data = await contactServices.getAllContacts();
    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getContactByIdController = async (req, res) => {
  try {
    const { contactId } = req.params;
    const data = await contactServices.getContactById(contactId);

    if (!data) {
      const error = new Error('Contact not found');
      error.statos = 404;
      throw error;
    }

    res.json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data,
    });
  } catch (error) {
    const { status = 500, message } = error;
    res.status(status).json({
      message,
    });
  }
};
