import Joi from 'joi';
import { contactType } from '../constants/contacts.js';

export const contactAddSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should have at least {#limit} characters',
    'string.max': 'Name should have at most {#limit} characters',
    'any.required': 'Name is required!',
  }),
  phoneNumber: Joi.number().integer().required().messages({
    'any.required': 'Phone number is required!',
  }),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .valid(...contactType)
    .required()
    .messages({
      'any.required': 'Contact type is required!',
    }),
});

export const contactPatchSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should have at least {#limit} characters',
    'string.max': 'Name should have at most {#limit} characters',
  }),
  phoneNumber: Joi.number().integer(),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .valid(...contactType)
    .messages({
      'any.required': 'Contact type is required!',
    }),
});
