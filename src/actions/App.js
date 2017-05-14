import { createWarrior } from '../db';

const editUserInfo = (editField, value) => {
  return {
    type: 'EDIT_USER_INFO',
    editField,
    value
  };
};

export { editUserInfo };
