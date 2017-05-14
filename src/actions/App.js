import { createWarrior } from '../db';

const saveUserInfo = (name) => {
  return {
    type: 'USER_INFO_SAVED',
    name: name
    };
  };

const editUserInfo = (editField, value) => {
  return {
    type: 'EDIT_USER_INFO',
    editField,
    value
  };
};

export { saveUserInfo, editUserInfo };
