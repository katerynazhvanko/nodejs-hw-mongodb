import { Router } from 'express';
import * as contactController from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';
import {
  contactAddSchema,
  contactPatchSchema,
} from '../validation/contacts.js';
import isValidId from '../middlewares/isValidId.js';

const contactsRouter = Router();

contactsRouter.get(
  '/',
  ctrlWrapper(contactController.getAllContactsController),
);

contactsRouter.get(
  '/:contactId',
  isValidId,
  ctrlWrapper(contactController.getContactByIdController),
);

contactsRouter.post(
  '/',
  validateBody(contactAddSchema),
  ctrlWrapper(contactController.createContactController),
);

contactsRouter.put(
  '/:contactId',
  isValidId,
  validateBody(contactAddSchema),
  ctrlWrapper(contactController.upsertContactController),
);

contactsRouter.patch(
  '/:contactId',
  isValidId,
  validateBody(contactPatchSchema),
  ctrlWrapper(contactController.patchContactController),
);

contactsRouter.delete(
  '/:contactId',
  isValidId,
  ctrlWrapper(contactController.deleteContactController),
);

export default contactsRouter;
