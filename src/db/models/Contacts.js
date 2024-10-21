import { Schema, model } from 'mongoose';
import { contactType } from '../../constants/contacts.js';
import { handleSaveError, setUpdateOptions } from '../../db/models/hooks.js';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: String,
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: contactType,
      default: 'personal',
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

contactSchema.post('save', handleSaveError);
contactSchema.pre('findOneAndUpdate', setUpdateOptions);
contactSchema.post('findOneAndUpdate', handleSaveError);

const ContactCollection = model('contact', contactSchema);

export const sortFields = ['name', 'phoneNumber', 'email', 'contactType'];

export default ContactCollection;
