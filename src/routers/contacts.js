import { Router } from 'express';
import * as contactController from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';
import { contactAddSchema } from '../validation/contacts.js';

const contactsRouter = Router();

contactsRouter.get(
  '/',
  ctrlWrapper(contactController.getAllContactsController),
);

contactsRouter.get(
  '/:contactId',
  ctrlWrapper(contactController.getContactByIdController),
);

contactsRouter.post(
  '/',
  validateBody(contactAddSchema),
  ctrlWrapper(contactController.createContactController),
);

contactsRouter.put(
  '/:contactId',
  validateBody(contactAddSchema),
  ctrlWrapper(contactController.upsertContactController),
);

contactsRouter.patch(
  '/:contactId',
  ctrlWrapper(contactController.patchContactController),
);

contactsRouter.delete(
  '/:contactId',
  ctrlWrapper(contactController.deleteContactController),
);

export default contactsRouter;
