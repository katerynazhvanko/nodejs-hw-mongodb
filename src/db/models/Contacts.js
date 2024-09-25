import { Schema, model } from 'mongoose';
import { contactType } from '../../constants/contacts.js';

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

const ContactCollection = model('contact', contactSchema);

export default ContactCollection;
