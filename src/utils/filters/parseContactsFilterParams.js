import { contactType } from '../../constants/contacts.js';

const parseContactType = (type) => {
  if (typeof type !== 'string') return;

  const isContactType = (type) => contactType.includes(type);
  console.log('isContactType', isContactType);

  if (isContactType(type)) return type;
};

const parseBoolean = (value) => ({ true: true, false: false }[value]);

const parseContactsFilterParams = ({ type, isFavourite }) => {
  const parsedContactTypeFilter = parseContactType(type);
  const parsedContactisFavoriteFilter = parseBoolean(isFavourite);

  return {
    type: parsedContactTypeFilter,
    isFavorite: parsedContactisFavoriteFilter,
  };
};

export default parseContactsFilterParams;
